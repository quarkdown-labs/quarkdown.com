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

export const doctypeSlides = `${s(fn, '.doctype')} ${s(p, '{')}${s(str, 'slides')}${s(p, '}')}`;

export const agentBox = `\
${s(fn, '.box')} type${s(p, ':{')}${s(str, 'warning')}${s(p, '}')}
    ${s(kw, '**Hands off the candy jar.**')} You have been warned.`;

export const flexibility = `\
${s(fn, '.extend')} ${s(p, '{')}${s(str, 'link')}${s(p, '}')}
    ${s(fn, '.super')} foreground${s(p, ':{')}${s(str, 'darkgreen')}${s(p, '}')}

${s(fn, '.extend')} ${s(p, '{')}${s(str, 'paragraph')}${s(p, '}')}
    content${s(p, ':')}
    ${s(fn, '.super')}
        ${s(fn, '.content')}${s(p, '::')}${s(fn, 'match')} ${s(p, '{')}${s(str, '[Oo]rigami')}${s(p, '}')}
            ${s(kw, '***')}${s(fn, '.1')}${s(kw, '***')}

Origami is the art of folding paper.${'  '}
Learn more about origami on ${s(p, '[')}Wikipedia${s(p, '](')}${s(ref, 'https://en.wikipedia.org/wiki/Origami')}${s(p, ')')}.`;

export const scripting = `\
${s(fn, '.function')} ${s(p, '{')}${s(str, 'animal')}${s(p, '}')}
    name ecosystem picture${s(p, ':')}
    ${s(fn, '.row')}
        ${s(fn, '.clip')} ${s(p, '{')}${s(str, 'circle')}${s(p, '}')}
            ${s(fn, '.picture')}

        - ${s(kw, '**Name**')}: ${s(fn, '.name')}
        - ${s(kw, '**Ecosystem**')}: ${s(fn, '.ecosystem')}

${s(fn, '.animal')} ${s(p, '{')}${s(str, 'Red panda')}${s(p, '}')} ecosystem${s(p, ':')}${s(p, '{')}${s(str, 'Temperate forests')}${s(p, '}')}
    ${s(p, '![')}Red panda${s(p, '](')}${s(ref, 'img/red-panda.jpg')}${s(p, ')')}

${s(fn, '.animal')} ${s(p, '{')}${s(str, 'Sea otter')}${s(p, '}')} ecosystem${s(p, ':')}${s(p, '{')}${s(str, 'Kelp forests')}${s(p, '}')}
    ${s(p, '![')}Sea otter${s(p, '](')}${s(ref, 'img/sea-otter.jpg')}${s(p, ')')}

${s(fn, '.animal')} ${s(p, '{')}${s(str, 'Clownfish')}${s(p, '}')} ecosystem${s(p, ':')}${s(p, '{')}${s(str, 'Coral reefs')}${s(p, '}')}
    ${s(p, '![')}Clownfish${s(p, '](')}${s(ref, 'img/clownfish.jpg')}${s(p, ')')}`;

