> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Stacks

Stack functions are layout functions that arrange a group of elements according to certain layout rules. There are three of them:

- **`.row`**
- **`.column`**
- **`.grid`**

## Blocks

To understand which elements to handle, stack functions rely on the strict Markdown concept of a block, which is an isolated chunk of the document: a paragraph, a code block, a list, a quote, a figure, or another function call.

> **Example 1**
> 
> ```markdown
> .row gap:{1cm}
>     A
> 
>     B
> 
>     C
> ```
> 
> A
> 
> B
> 
> C

> **Example 2**
> 
> The following example has only one item because A, B, and C are all part of the same paragraph (due to *lazy lines*):
> 
> ```markdown
> .row gap:{1cm}
>     A
>     B
>     C
> ```
> 
> A
> B
> C

> **Example 3**
> 
> ```markdown
> .row
>     ![](assets/icon.svg)
> 
>     ![](assets/icon.svg)
> ```
> 
> ![](media/icon@-1965017468.svg)
> 
> ![](media/icon@-1965017468.svg)

## Parameters

All stack functions accept the following optional arguments:

| Parameter | Description | Accepts |
| --- | --- | --- |
| `alignment` | Main axis alignment (CSS `justify-content`). | `start`, `center`, `end`, `spacebetween`, `spacearound`, `spaceevenly` |
| `cross` | Cross axis alignment (CSS `align-items`). | `start`, `center`, `end`, `stretch` |
| `gap` | Space between items. | [`Size`](sizes.qd) |

The `grid` function requires a `columns` argument, which must be specified as an integer.   

It also provides optional `vgap` and `hgap` parameters that override the `gap` setting, allowing you to control the vertical and horizontal spacing independently.

> **Example 4**
> 
> ```markdown
> .grid columns:{2} alignment:{spacearound}
>     A
> 
>     *B*
> 
>     **C**
> 
>     ***D***
> ```
> 
> A
> 
> *B*
> 
> **C**
> 
> ***D***

## Composition

You can compose stack functions to create complex layouts:

> **Example 5**
> 
> ```markdown
> .row alignment:{spacearound}
>     .column
>         **Michael Scott**
> 
>         Dunder Mifflin Paper Company, Inc.
> 
>         [michaelscott@example.com](mailto:michaelscott@example.com)
> 
>     .column
>         **Forrest Gump**
> 
>         Bubba Gump Shrimp Co.
> 
>         [forrestgump@example.com](mailto:forrestgump@example.com)
> ```
> 
> **Michael Scott**
> 
> Dunder Mifflin Paper Company, Inc.
> 
> [michaelscott@example.com](mailto:michaelscott@example.com)
> 
> **Forrest Gump**
> 
> Bubba Gump Shrimp Co.
> 
> [forrestgump@example.com](mailto:forrestgump@example.com)