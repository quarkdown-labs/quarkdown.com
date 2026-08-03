> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Loops

## For-each

The main type of loop is provided by the **`.foreach`** function, which accepts:

1. An [`Iterable`](iterable.md) value
2. A single-parameter [lambda](lambda.md) block, where the argument is the current item being iterated

> **Example 1**
> 
> ```markdown
> .foreach {2..4}
>     n:
>     The number is: **.n**
> ```
> 
> The number is: **2**
> 
> The number is: **3**
> 
> The number is: **4**

The function returns an ordered iterable **collection** of the same size as the input, containing the evaluation of the lambda for each iterated value. This means the function can be used as an expression, similarly to the `map` function in many programming languages.

> **Example 2**
> 
> Keep in mind that `.1` implicitly refers to the first parameter of the lambda.
> 
> ```markdown
> .row alignment:{spacearound}
>     .foreach {1..3}
>         .1
> ```
> 
> 1
> 
> 2
> 
> 3

Any iterable value is accepted, including Markdown lists. See [*Iterable*](iterable.md) for all possible ways of defining an iterable value.

> **Example 3**
> 
> ```markdown
> .var {letters}
>   - A
>   - B
>   - C
> 
> .foreach {.letters}
>   ###! .1
> 
>   The letter is **.1**.
> ```
> 
> ### A
> 
> The letter is **A**.
> 
> ### B
> 
> The letter is **B**.
> 
> ### C
> 
> The letter is **C**.

The type of iterated elements is preserved. See [*Typing*](typing.md) for more information.

> **Example 4**
> 
> ```markdown
> .row alignment:{spacearound} 
>     .foreach {1..5}
>         n:
>         .multiply {.n} by:{.n}
> ```
> 
> 1
> 
> 4
> 
> 9
> 
> 16
> 
> 25

## Repeat

The **`.repeat {times}`** function is a shorthand for `.foreach {1..times}`.

> **Example 5**
> 
> ```markdown
> .repeat {3}
>     .1
> ```
> 
> 1
> 
> 2
> 
> 3