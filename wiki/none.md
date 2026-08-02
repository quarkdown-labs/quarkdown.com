> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# None

*None* is a special value that represents nothing or emptiness (similar to `null` in many programming languages). Functions can return it, and it also serves as a placeholder for [optional parameters](declaring-functions.qd).

## Operations

| Function | Description | Return type |
| --- | --- | --- |
| `.none` | Creates an empty value. | `none` |
| `.isnone {value}` | Checks whether `value` is `none`. | [`Boolean`](boolean.qd) |
| `.otherwise {value} {fallback}` | Returns `value` if it is not `none`, `fallback` otherwise. Works best with [function call chaining](syntax-of-a-function-call.qd). | Type of either `value` or `fallback` |
| `.ifpresent {value} {lambda}` | If `value` is not `none`, maps it to a new value according to the [lambda](lambda.qd). If `none`, returns `none`. Works best with function call chaining. | Type returned by `lambda`, or `none` |
| `.takeif {value} {lambda}` | Returns `value` if the boolean-returning [lambda](lambda.qd) is accepted on `value`. Returns `none` otherwise. Works best with function call chaining. | Type of `value`, or `none` |

## Passing None to functions

Native functions from the stdlib, written in Kotlin, often accept nullable parameters. When such a parameter is passed `None`, the function treats it as if it were `null`, which often means that the parameter is considered absent.

This is particularly useful when a value is stored in a variable that might or might not be `None`, and you want to forward it to a function without checking first.

> **Example 1**
> 
> ```markdown
> .function {highlight} 
>     color?:
>     .container background:{.color}
>         Value of color: .color
> 
> 1. .highlight {teal}
> 2. .highlight
> ```
> 
> 1. Value of color: teal
> 2. Value of color: None

## Example operations

> **Example 2**
> 
> ```markdown
> Hi! I'm .name::otherwise {unnamed}
> ```
> 
> - If `name` is `John`: *Hi! I’m John*
> - If it is `none`: *Hi! I’m unnamed*

> **Example 3**
> 
> ```markdown
> .num::takeif {x: .x::equals {5}}
> ```
> 
> - If `num` is 5: *5*
> - Otherwise: *None*
> 
> > Curious about the `x:` syntax? It declares a parametric [inline `Lambda`](lambda.qd). Check its page for further details.

> **Example 4**
> 
> ```markdown
> .num::takeif {x: .x::iseven}::ifpresent {Even}::otherwise {Odd}
> ```
> 
> - If `num` is even: *Even*
> - Otherwise: *Odd*

> **Example 5**
> 
> ```markdown
> .x::ifpresent {Yes, .1 is present}::otherwise {Not present}
> ```
> 
> - If `x` is `something`: *Yes, something is present*
> - If it is `none`: *Not present*
> 
> > Here, the lambda parameter is implicit and accessed by position.