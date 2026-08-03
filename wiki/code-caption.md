> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Code caption

Quarkdown introduces code captions, which you can set by adding a caption directly in the code block declaration. Place the caption after the language identifier, wrapped in double quotes, single quotes, or parentheses. This syntax is the same as the image *title* attribute and [table captions](table-caption.md).

> **Example 1**
> 
> ````markdown
> ```python "Fibonacci function"
> def fibonacci(n):
>     if n <= 1:
>         return n
>     return fibonacci(n - 1) + fibonacci(n - 2)
> ```
> ````
> 
> ```python
> def fibonacci(n):
>     if n <= 1:
>         return n
>     return fibonacci(n - 1) + fibonacci(n - 2)
> ```
> Fibonacci function

Equivalently, via the [`.code`](code.md) function:

> **Example 2**
> 
> ```markdown
> .code lang:{python} caption:{Fibonacci function}
>     def fibonacci(n):
>         if n <= 1:
>             return n
>         return fibonacci(n - 1) + fibonacci(n - 2)
> ```
> 
> ```python
> def fibonacci(n):
>     if n <= 1:
>         return n
>     return fibonacci(n - 1) + fibonacci(n - 2)
> ```
> Fibonacci function

## Numbering

You can also **number** code blocks, to display a sequential number alongside the caption. See [Numbering](numbering.md) for more information.