> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Collapsible

The **`.collapse`** function creates an interactive collapsible block that users can toggle by clicking.

The function requires an [inline](markdown-content.md#inline-content) title, which is always displayed, and [block](markdown-content.md#block-content) content, which appears when expanded.

> **Example 1**
> 
> ```markdown
> .collapse {A _collapsible_ block. **Click me!**}
>     You found this hidden content.
> 
>     **Surprise!**
> ```
> 
> You found this hidden content.
> 
> **Surprise!**

You can change the initial state of the block using the optional `open` [`Boolean`](boolean.md) argument, which defaults to `false` (collapsed).

> **Example 2**
> 
> ```markdown
> .collapse {A _collapsible_ block. **Click me!**} open:{yes}
>     Not so hidden content anymore!
> ```
> 
> Not so hidden content anymore!