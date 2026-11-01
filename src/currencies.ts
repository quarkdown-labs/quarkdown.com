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

/** Time zones of the places that pay in a currency other than the default one. */
const CURRENCY_BY_TIME_ZONE: Record<string, Currency> = {
  ...Object.fromEntries(
    ['Europe/London', 'Europe/Belfast', 'Europe/Guernsey', 'Europe/Isle_of_Man', 'Europe/Jersey'].map((zone) => [zone, 'gbp']),
  ),
  ...Object.fromEntries(
    [
      'Europe/Amsterdam', 'Europe/Andorra', 'Europe/Athens', 'Europe/Berlin', 'Europe/Bratislava', 'Europe/Brussels',
      'Europe/Dublin', 'Europe/Helsinki', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/Luxembourg', 'Europe/Madrid',
      'Europe/Malta', 'Europe/Mariehamn', 'Europe/Monaco', 'Europe/Nicosia', 'Europe/Paris', 'Europe/Podgorica',
      'Europe/Riga', 'Europe/Rome', 'Europe/San_Marino', 'Europe/Tallinn', 'Europe/Vatican', 'Europe/Vienna',
      'Europe/Vilnius', 'Europe/Zagreb', 'Atlantic/Azores', 'Atlantic/Canary', 'Atlantic/Madeira', 'Africa/Ceuta',
      'Asia/Famagusta', 'Asia/Nicosia',
    ].map((zone) => [zone, 'eur']),
  ),
};

/** Regions (ISO 3166-1) that pay in a currency other than the default one. */
const CURRENCY_BY_REGION: Record<string, Currency> = {
  ...Object.fromEntries(['GB', 'GG', 'IM', 'JE'].map((region) => [region, 'gbp'])),
  ...Object.fromEntries(
    [
      'AD', 'AT', 'BE', 'CY', 'DE', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'IE', 'IT', 'LT', 'LU', 'LV', 'MC', 'ME',
      'MT', 'NL', 'PT', 'SI', 'SK', 'SM', 'VA',
    ].map((region) => [region, 'eur']),
  ),
};

/** Prefix of the time zones that name an offset rather than a place, such as a privacy browser's `Etc/UTC`. */
const PLACELESS_TIME_ZONE_PREFIX = 'Etc/';

/** Time zone that names no place. */
const UTC_TIME_ZONE = 'UTC';

/** The currency [locale]'s region pays in, inferring the region from the language when the tag names none. */
function currencyOfLocale(locale: string): Currency | undefined {
  try {
    const { region } = new Intl.Locale(locale).maximize();
    return region ? CURRENCY_BY_REGION[region] : undefined;
  } catch {
    return undefined;
  }
}

/**
 * The currency a visitor most likely pays in: the one of the place their [timeZone] names, or, when it names
 * none, the one of their first preferred [locales]' region; the default currency otherwise.
 */
export function guessCurrency(timeZone: string, locales: readonly string[]): Currency {
  const fallback = currencies[0].id;
  if (timeZone !== UTC_TIME_ZONE && !timeZone.startsWith(PLACELESS_TIME_ZONE_PREFIX)) {
    return CURRENCY_BY_TIME_ZONE[timeZone] ?? fallback;
  }
  const [locale] = locales;
  return (locale && currencyOfLocale(locale)) || fallback;
}
