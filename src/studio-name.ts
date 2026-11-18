import lockup from './assets/studio-lockup.svg?raw';

/** [html] with each mention of Studio replaced by its inline lockup, styled by `.studio-inline`. */
export const withStudioLockup = (html: string) =>
  html.replace(/\bStudio\b(?=(['’])?)/g, (_, apostrophe) =>
    `<span class="studio-inline${apostrophe ? ' studio-inline--possessive' : ''}">${lockup}</span>`);
