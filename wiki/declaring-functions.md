> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Declaring functions

You can declare functions using the **`.function`**  function (in Quarkdown, everything is a function!).

It accepts two arguments: the function name and its body. The function can then be invoked as a normal function call – see [Syntax of a function call](syntax-of-a-function-call.md).

> **Example 1**
> 
> ```markdown
> .function {helloworld}
>     Hello, world!
> 
> .helloworld
> ```
> 
> Hello, world!

## Parameters

The body parameter is a [lambda](lambda.md), and each parameter of the function is a parameter of the lambda block. You can access each argument within the function body as a [variable](variables.md), which in Quarkdown is essentially a function with no parameters.

> **Example 2**
> 
> ```markdown
> .function {greet}
>     to from:
>     Hello, .to from .from!
> 
> .greet {world} {John}
> ```
> 
> Hello, world from John!

> You can name arguments to improve readability:
> 
> ```markdown
> .greet {world} from:{John}
> ```

### Optional parameters

If a function parameter ends with a question mark `?`, it becomes optional. When you do not provide the corresponding argument, it receives the value [`None`](none.md).

> **Example 3**
> 
> ```markdown
> .function {greet}
>     to from?:
>     Hello, .to from .from!
> 
> .greet {world}
> 
> .greet {world} {John}
> ```
> 
> Hello, world from None!
> 
> Hello, world from John!

`None` provides several useful [operations](none.md#operations), such as `.otherwise` for placeholders that emulate default parameter values.

> **Example 4**
> 
> ```markdown
> .function {greet}
>     to from?:
>     Hello, .to from .from::otherwise {unnamed}!
> 
> .greet {world}
> 
> .greet {world} {John}
> ```
> 
> Hello, world from unnamed!
> 
> Hello, world from John!

### Block parameters

Block arguments always correspond to the last parameter of a function. There is no special syntax to declare them; just define the function as usual.

> **Example 5**
> 
> ```markdown
> .function {myexample}
>     title content:
>     .box {.title}
>         .content
> 
> .myexample {Example title}
>     This is the content of the example.
> ```
> 
> > **Example title**
> > 
> > This is the content of the example.

## Returning values

In Quarkdown, there are no return statements. Every reached instruction becomes part of the output – see [Conditional statements](conditional-statements.md).

> **Example 6**
> 
> ```markdown
> .function {myfunction}
>     .if {.iseven {3}}
>         A
>     B
> 
> .myfunction
> ```
> 
> B

Functions can return any Markdown content.

> **Example 7**
> 
> ```markdown
> .function {greet}
>     to from:
>     **Hello, .to** from .from!
> 
> .greet {world} from:{John}
> ```
> 
> **Hello, world** from John!

Quarkdown is [weakly typed](typing.md), so functions can return any type of value.

> **Example 8**
> 
> ```markdown
> .function {area}
>     width height:
>     .multiply {.width} by:{.height}
> 
> The area of the rectangle is **.area {4} {2}**.
> ```
> 
> The area of the rectangle is **8**.

> **Example 9**
> 
> ```markdown
> .function {isadult}
>     age:
>     .age::isgreater than:{18}
> 
> .if {.isadult age:{20}}
>     You're an adult!
> ```
> 
> You’re an adult!

## Overwriting functions

A function can be redeclared at any point, and the new definition takes precedence over the previous one from that point onward within that scope.

> **Example 10**
> 
> ```markdown
> .uppercase {Quarkdown}
> 
> .function {uppercase}
>     text:
>     .text::lowercase
> 
> .uppercase {Quarkdown}
> ```
> 
> QUARKDOWN
> 
> quarkdown

This behavior can be disabled at the command-line level via the [`--forbid-function-overwriting`](cli-compiler.md#function-overwriting) option, which raises a compilation error when a function is declared with a name that is already in use.