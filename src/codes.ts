const fn = 'hl-function';
const str = 'hl-string';
const p = 'hl-punctuation';
const h = 'hl-heading';
const kw = 'hl-keyword';
const ref = 'hl-reference';
const qt = 'hl-quote';

const s = (cls: string, text: string) => `<span class="${cls}">${text}</span>`;

export const noBoilerplate = `\
${s(fn, '.docauthor')} ${s(p, '{')}${s(str, 'Jennifer Chu')}${s(p, '}')}

${s(fn, '.pagemargin')} ${s(p, '{')}${s(str, 'topright')}${s(p, '}')}
    ${s(fn, '.docauthor')} ${s(p, '|')} MIT News

${s(h, '# X-ray flashes from a supermassive black hole')}

${s(p, '!(')}${s(str, '70%')}${s(p, ')[')}Black hole${s(p, '](')}${s(ref, 'img/blackhole.jpg')}${s(p, ')')}

${s(fn, '.abstract')}
    One supermassive black hole has kept astronomers glued to their scopes
    for the last several years.
    The black hole in question is ${s(kw, '`1ES 1927+654`')}, which is about as
    massive as a million suns and sits in a galaxy that is 270 million
    light-years away.
    In 2018, astronomers at MIT and elsewhere observed that the black
    hole\u2019s corona \u2014 a cloud of whirling, white-hot plasma \u2014 suddenly
    ${s(kw, '**disappeared**')}, before reassembling months later.
    The brief though dramatic shut-off was a first in black hole astronomy.

${s(qt, '&gt; This would be the closest thing we know of around any black hole.')}
${s(qt, '&gt; - Megan Masterson, a graduate student in physics at MIT')}`;

export const doctypePlain = `${s(fn, '.doctype')} ${s(p, '{')}${s(str, 'plain')}${s(p, '}')}`;

export const doctypePaged = `${s(fn, '.doctype')} ${s(p, '{')}${s(str, 'paged')}${s(p, '}')}`;

export const doctypeDocs = `${s(fn, '.doctype')} ${s(p, '{')}${s(str, 'docs')}${s(p, '}')}`;
