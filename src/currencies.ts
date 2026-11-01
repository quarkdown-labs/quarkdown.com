import { getCountryForTimezone } from 'countries-and-timezones';
import countryToCurrency, { type Countries } from 'country-to-currency';
import type { TabOption } from './components/TabSwitcher.astro';
import type { Currency } from './links';

/** Currencies the pricing page switches between, the first one shown when no other is guessed. */
export const currencies: (TabOption & { id: Currency })[] = [
  { id: 'usd', label: 'USD' },
  { id: 'eur', label: 'EUR' },
  { id: 'gbp', label: 'GBP' },
];

/** A value set per currency. */
export type PerCurrency<T> = Record<Currency, T>;

/** A value per currency, each built by [build] from the currency. */
function perCurrency<T>(build: (currency: Currency) => T): PerCurrency<T> {
  return Object.fromEntries(currencies.map(({ id }) => [id, build(id)])) as PerCurrency<T>;
}

/** [value] in every currency. */
export function inEveryCurrency<T>(value: T): PerCurrency<T> {
  return perCurrency(() => value);
}

/** [values] with [transform] applied to each currency's. */
export function mapCurrencies<T, R>(values: PerCurrency<T>, transform: (value: T) => R): PerCurrency<R> {
  return perCurrency((currency) => transform(values[currency]));
}

/** Locale prices are written in, matching the site's language. */
const PRICE_LOCALE = 'en';

/** Digits after the decimal separator of a price that has cents. */
const CENT_DIGITS = 2;

/** [amount] in [currency], with cents only when it has any: `$6`, `€6.99`. */
export function formatPrice(amount: number, currency: Currency): string {
  const digits = Number.isInteger(amount) ? 0 : CENT_DIGITS;
  return new Intl.NumberFormat(PRICE_LOCALE, {
    style: 'currency',
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(amount);
}

/** The currency [region] (ISO 3166-1) pays in, when it is one prices are shown in. */
function currencyOfRegion(region: string): Currency | undefined {
  const currency = countryToCurrency[region as Countries]?.toLowerCase();
  return currencies.find(({ id }) => id === currency)?.id;
}

/** The region [locale] names, inferring it from the language when the tag names none. */
function regionOfLocale(locale: string): string | undefined {
  try {
    return new Intl.Locale(locale).maximize().region;
  } catch {
    return undefined;
  }
}

/**
 * The currency a visitor most likely pays in: the one of the country their [timeZone] names, or, when it names
 * none, the one of their first preferred [locales]' region; the default currency otherwise.
 */
export function guessCurrency(timeZone: string, locales: readonly string[]): Currency {
  const [locale] = locales;
  const region = getCountryForTimezone(timeZone)?.id ?? (locale && regionOfLocale(locale));
  return (region && currencyOfRegion(region)) || currencies[0].id;
}
