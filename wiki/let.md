> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Let

The **`.let`** function defines a temporary variable that is accessible only within its scope. It accepts two parameters:

1. The value, of [any type](typing.qd), to assign to the scoped variable
2. A [lambda](lambda.qd) block that accepts one parameter (the given value)

> **Example 1**
> 
> ```markdown
> .let {.multiply {4} {2}}
>     area:
>     The area of the rectangle is .area.
>     If it were a triangle, it would have been .divide {.area} by:{2}.
> ```
> 
> The area of the rectangle is 8.
> If it were a triangle, it would have been 4.

The function returns the evaluation of the lambda, so you can use it as an expression.

> **Example 2**
> 
> ```markdown
> .center
>     .let {Quarkdown}
>         name:
>         .uppercase {.name}, .lowercase {.name}, .capitalize {.name}
> ```
> 
> QUARKDOWN, quarkdown, Quarkdown

The lambda block also accepts implicit positional parameters. See [*Lambda*](lambda.qd) for more information.

> **Example 3**
> 
> ```markdown
> .center
>     .let {Quarkdown}
>         .uppercase {.1}, .lowercase {.1}, .capitalize {.1}
> ```
> 
> QUARKDOWN, quarkdown, Quarkdown