# Extending functions

Function extension is a powerful feature that lets you transform, decorate, or replace a function’s behavior.

> This is the backbone of the [element styling](element-styling.qd) engine, when the extended function is a [Markdown primitive](primitives.qd), such as [`.heading`](headings.qd). See its page for more details about extending Markdown elements.

You can extend any previously-declared function using the **`.extend`**  function within a scope. The extension wraps the original function without losing the original definition.

> **Example 1**
> 
> ```markdown
> .function {greet}
>     name:
>     Hello, .name!
> 
> .extend {greet}
>     .super::uppercase
> 
> .greet {world}
> ```
> 
> HELLO, WORLD!

## Accessing the original

Within the wrapper body, the original function is exposed as **`.super`**. Calling it invokes the original with the same arguments.

## Parameters

The wrapper body is a [lambda](lambda.qd). Its explicit parameters, if any, must match the names of the original function’s parameters and let you intercept the arguments the caller passed.

Because `.super` is the original function itself, it accepts the same arguments. Any argument you pass overrides the one the wrapper was called with, while everything you leave out falls through unchanged.

> **Example 2**
> 
> ```markdown
> .function {greet}
>     greeting name:
>     .greeting, .name!
> 
> .extend {greet}
>     name:
>     .super greeting:{Howdy}
> 
> .greet {Hello} {world}
> ```
> 
> Howdy, world!

> **Example 3**
> 
> New argument values can also rely on the original arguments, letting you transform them before passing them on:
> 
> ```markdown
> .function {greet}
>     greeting name:
>     .greeting, .name!
> 
> .extend {greet}
>     greeting name:
>     .super greeting:{.greeting::uppercase}
> 
> .greet {Hello} {world}
> ```
> 
> HELLO, world!

All wrapper parameters are always optional. You only need to declare the parameters you actually use in the body.

> **Example 4**
> 
> ```markdown
> .function {greet}
>     greeting name surname:
>     .greeting, .name .surname!
> 
> .extend {greet}
>     name:
>     .super name:{.name::uppercase}
> 
> .greet {Hello} name:{John} surname:{Doe}
> ```
> 
> Hello, JOHN Doe!

## Conditional extension

An optional `where` [inline lambda](lambda.qd) parameter lets you define a condition that, if not met at call time, lets the whole call fall back to the original definition. Its parameters follow the same rules as the body lambda.

> **Example 5**
> 
> ```markdown
> .function {greet}
>     greeting name:
>     .greeting, .name!
> 
> .extend {greet} where:{name: .name::equals {world}}
>     greeting:
>     .super greeting:{.greeting::uppercase}
> 
> .greet {Hello} {world}
> 
> .greet {Hello} {John}
> ```
> 
> HELLO, world!
> 
> Hello, John!

> **Example 6**
> 
> Built-in functions, such as [`.heading`](headings.qd), can be extended. See [*Element styling*](element-styling.qd) for more details.
> 
> ```markdown
> .extend {heading} where:{depth: .depth::islower than:{4}}
>     content:
>     .super background:{teal}
> 
> ## H2
> 
> ## H3
> 
> ## H4
> ```
> 
> ## H2
> 
> ### H3
> 
> #### H4

## Chaining multiple extensions

You can call `.extend` more than once on the same function, with each new extension added on top of the previous chain.

> **Example 7**
> 
> ```markdown
> .extend {heading}
>     .super foreground:{blue}
> 
> .extend {heading}
>     .super foreground:{green}
> 
> .extend {heading} where:{depth: .depth::equals {2}}
>     .super foreground:{red}
> 
> ## H2
> 
> ### H3
> ```
> 
> ## H2
> 
> ### H3

When extensions carry `where` conditions, the outer (first-declared) condition is checked first, so declaration order matters if two conditions can both apply to the same call.

### Resetting values in a chain

Passing [None](none.qd) as an argument to a nullable parameter restores it to its default.

> **Example 8**
> 
> Here, the outer extension colors every heading, and the inner one resets the styling on depth-3 headings only.
> 
> ```markdown
> .extend {heading}
>     .super background:{teal}
> 
> .extend {heading} where:{depth: .depth::equals {3}}
>     .super background:{.none}
> 
> ## H2
> 
> ### H3
> 
> #### H4
> ```
> 
> ## H2
> 
> ### H3
> 
> #### H4