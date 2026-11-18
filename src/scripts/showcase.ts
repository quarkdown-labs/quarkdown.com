/**
 * Activation of the Studio showcase's visuals. The visual in view is marked [ACTIVE], and also [SETTLED]
 * when it should show its final state without animating, i.e. once it has played or when reached scrolling up.
 */

const VISUAL = 'data-showcase-visual';
const ACTIVE = 'data-active';
const SETTLED = 'data-settled';
const PLAYED = 'data-played';
const PROGRESS = 'showcase:progress';

/** Marks [visual] as the one in view, or not; [settled] when it comes into view by scrolling back up. */
export function setActive(visual: Element, active: boolean, { settled = false } = {}) {
  if (visual.hasAttribute(ACTIVE) === active) return;
  visual.toggleAttribute(SETTLED, active && (settled || visual.hasAttribute(PLAYED)));
  if (active) visual.setAttribute(PLAYED, '');
  visual.toggleAttribute(ACTIVE, active);
}

/** A ScrollTrigger `onToggle` callback marking [visual] active while toggled on. */
export const activateOnToggle = (visual: Element) => ({ isActive, direction }: { isActive: boolean; direction: number }) =>
  setActive(visual, isActive, { settled: direction < 0 });

interface Activation {
  /** [settled] when the visual should show its final state at once. */
  activate(settled: boolean): void;
  deactivate(): void;
}

/** Calls [activate] whenever the showcase visual containing [element] becomes active, and [deactivate] when it no longer is. */
export function whileActive(element: Element, { activate, deactivate }: Activation) {
  const visual = element.closest(`[${VISUAL}]`);
  if (!visual) return;

  let active = false;
  const sync = () => {
    if (visual.hasAttribute(ACTIVE) === active) return;
    active = !active;
    if (active) activate(visual.hasAttribute(SETTLED));
    else deactivate();
  };

  new MutationObserver(sync).observe(visual, { attributes: true, attributeFilter: [ACTIVE] });
  sync();
}

/** Reports how far through its playback the visual part [element] is, from 0 to 1. */
export function reportProgress(element: Element, progress: number) {
  element.dispatchEvent(new CustomEvent(PROGRESS, { detail: progress, bubbles: true }));
}

/** Calls [listener] with the progress reported by any visual part within [element]. */
export function onProgress(element: Element, listener: (progress: number) => void) {
  element.addEventListener(PROGRESS, (event) => listener((event as CustomEvent<number>).detail));
}
