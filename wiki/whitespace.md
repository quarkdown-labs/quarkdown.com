# Whitespace

You can add blank space anywhere via the **`.whitespace`** function  , which accepts optional `width` and `height` [Size](sizes.qd) arguments.

- If you set neither argument, a simple whitespace character is rendered (` `), which is useful for adding blank lines.
- If you set at least one argument, a rectangle of that size is rendered. Note that this might not always work outside of [layout functions](stacks.qd).

> **Example 1**
> 
> ```markdown
> Line 1
> 
> Line 2
> 
> .whitespace
> 
> Line 3
> ```
> 
> Line 1
> 
> Line 2
> 
> Line 3

> **Example 2**
> 
> ```markdown
> .row
>     A
> 
>     .whitespace width:{1cm}
> 
>     B
> 
>     .whitespace width:{2cm}
> 
>     C
> ```
> 
> A
> 
> B
> 
> C