> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Text symbols

Quarkdown features automatic text replacement for commonly used UTF-8 symbols.

Text is automatically replaced wherever inline content is accepted (for example, paragraphs, blockquotes, and boxes, but NOT code blocks/spans, math, URLs, etc.).

| Syntax | Rendered | Conditions |
| --- | --- | --- |
| `--` | — (em-dash) |  |
| `-` | – (en-dash) | Preceded by a word character and a whitespace, followed by a whitespace and a word character. |
| `...` | … | Either at the beginning or end of a word, not in between. |
| `->` | → |  |
| `<-` | ← |  |
| `=>` | ⇒ |  |
| `<==` | ⇐ |  |
| `>=` | ≥ |  |
| `<=` | ≤ |  |
| `!=` | ≠ |  |
| `+-` | ± |  |
| `'` | ’ | Not preceded by a word character, followed by a word character. |
| `'` | ’ | Not preceded by a whitespace. |
| `"` | ” | Not preceded by a word character, followed by a word character. |
| `"` | ” | Not preceded by a whitespace, not followed by a word character. |
| `(C)` | © |  |
| `(R)` | ® |  |
| `(TM)` | ™ |  |

> **Example 1**
> 
> ```markdown
> "Quarkdown"--a typesetting system--supports automatic text replacements.
> ```
> 
> “Quarkdown”—a typesetting system—supports automatic text replacements.

## Escaping

Escaping a sequence with a backslash `\` prevents the text from being replaced:

> **Example 2**
> 
> ```markdown
> \->
> ```
> 
> ->