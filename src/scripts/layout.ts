/** The layout offset of [element] from [ancestor], or from the page, ignoring transforms and stickiness. */
export function offsetOf(element: HTMLElement, ancestor?: HTMLElement) {
  let left = 0;
  let top = 0;
  for (let node: Element | null = element; node instanceof HTMLElement && node !== ancestor; node = node.offsetParent) {
    left += node.offsetLeft;
    top += node.offsetTop;
  }
  return { left, top };
}

/** Scroll position at which [element]'s top reaches [fraction] of the viewport's height, ignoring transforms, e.g. entrances. */
export const scrollWhereTopAt = (element: HTMLElement, fraction: number) => offsetOf(element).top - fraction * innerHeight;
