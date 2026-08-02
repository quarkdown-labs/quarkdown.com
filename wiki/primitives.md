> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Primitive functions

Primitive functions return elements that back standard Markdown syntax. Each one accepts parameters that plain Markdown may not, and can be intercepted via [`.extend`](extending-functions.qd) to customize their behavior and appearance across the entire document, even if created via standard Markdown syntax.

For example, extending `.heading` affects every `#`, `##`, and so on. Extending `.math` affects every `$ ... $` and `$$$ ... $$$`. See [*Element styling*](element-styling.qd) for the full mechanism.

## Available primitives

- [**`.heading`**](headings.qd)  backs `#`, `##`, … headings. Exposes explicit control over depth, numbering, page breaks, and cross-reference identifiers.

- 

- **`.paragraph`**  backs regular paragraphs.

- 

- **`.link`**  backs `[label](url "title")`.

- 

- **`.image`**  backs `![alt](url "title")`, with additional control over figure wrapping and [media storage](media-storage.qd).

- 

- [**`.figure`**](figure.qd)  backs the block that wraps an image or other content.

- 

- [**`.math`**](tex-formulae.qd)  backs `$ ... $` and `$$$ ... $$$` formulas.

- 

- [**`.code`**](code.qd)  backs fenced and indented code blocks.

- 

- [**`.pagebreak`**](page-break.qd)  backs `<<<`. Can be extended to decorate every forced page break in the document.