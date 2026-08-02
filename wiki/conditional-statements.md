> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Conditional statements

The **`.if`** function creates a conditional statement:

1. The first parameter is the [`boolean`](boolean.qd) condition to evaluate.
2. The second parameter is a parameter-less [lambda](lambda.qd) that runs only if the condition is true.

> **Example 1**
> 
> ```markdown
> .if {yes}
>     Hello, Quarkdown!
> ```
> 
> Hello, Quarkdown!

## Nesting

The function returns the lambda’s result if the condition is satisfied, or nothing otherwise. This means the function *propagates* its content up the call stack.

> **Example 2**
> 
> ```markdown
> <!-- Read this from bottom to top -->
> 
> .if {yes}
>     .if {no}
>         .if {yes}
>             .if {yes}
>                 Hello!
> ```

This behavior lets you use the function as part of any expression. For example, you can use it to conditionally include content inside layout functions, such as [stacks](stacks.qd).

> **Example 3**
> 
> ```markdown
> .row gap:{1cm}
>     A
> 
>     .if {.iseven {3}}
>         B
> 
>     C
> ```
> 
> A
> 
> C

## Negation

The **`.ifnot`** function is a shorthand that inverts `.if`’s behavior, returning a value only if the condition is *not* satisfied.

Quarkdown does not yet have an *else* statement, but you can emulate one using the [`.let`](let.qd) function:

> **Example 4**
> 
> ```markdown
> .let {.iseven {3}}
>     condition:
>     .if {.condition}
>         3 is even!
>     .ifnot {.condition}
>         3 is odd!
> ```
> 
> 3 is odd!

> `.ifnot {.condition}` is equivalent to `.if {.condition::not}`