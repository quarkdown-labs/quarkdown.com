> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Variables

Variables allow you to store and reuse values throughout your document. They are essential for avoiding repetition, creating dynamic content, and building reusable components.

## Defining a variable

Use **`.var {name} {value}`** to define a variable. The `value` is a [dynamic value](typing.qd), meaning it can be of any type: text, numbers, booleans, or even complex elements like layouts.

```markdown
.var {name} {Quarkdown}
```

## Accessing a variable

Once defined, you can access a variable by calling it as a parameter-less function:

> **Example 1**
> 
> ```markdown
> .var {name} {Quarkdown}
> 
> Hello, **.name**!
> ```
> 
> Hello, **Quarkdown**!

## Reassigning a variable

You can update a variable’s value at any point. There are two equivalent ways to do this:

- `.myvar {newvalue}`
- `.var {myvar} {newvalue}`

> **Example 2**
> 
> ```markdown
> .var {mynumber} {5}
> 
> .mynumber
> 
> .mynumber {.mynumber::sum {1}}
> 
> .mynumber
> ```
> 
> 5
> 
> 6

## Block variables

As mentioned in [Syntax of a function call](syntax-of-a-function-call.qd):

> A body argument always refers to the last parameter of the signature.

This means a variable’s value can span multiple lines and contain complex block content, not just simple inline values. This is powerful for storing reusable layouts, styled containers, or any structured content.

> **Example 3**
> 
> ```markdown
> .var {myrow}
>     .row gap:{2cm}
>         A
> 
>         B
> 
>         C
> 
> .container background:{teal} padding:{1cm}
>     .myrow
> ```
> 
> A
> 
> B
> 
> C

## Scoped variables

For temporary variables that should only exist within a limited scope, see the [`.let`](let.qd) function. Unlike `.var`, which creates document-wide variables, `.let` creates variables that exist only within a lambda block.