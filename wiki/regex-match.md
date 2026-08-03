> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Regex-based styling

The **`.match {content} {pattern} {replacement}`**  function:

1. finds every substring of inline content that matches a regular expression,
2. replaces each match with the inline content produced by a [lambda](lambda.md).

## Basic example

> **Example 1**
> 
> ```markdown
> .match {Quarkdown takes its name from quarks} pattern:{[Qq]uark(down|s)?}
>     match:
>     ***.match***
> ```
> 
> ***Quarkdown*** takes its name from ***quarks***

The lambda runs once per matched substring, with its argument referring to the matched text.

> **Example 2**
> 
> Using the implicit `.1` instead of a named parameter:
> 
> ```markdown
> .match {Hello, world} pattern:{world}
>     ***.1***
> ```
> 
> Hello, ***world***

## Chained call

`.match` works naturally in a [chain](syntax-of-a-function-call.md), since `content` is its first parameter.

> **Example 3**
> 
> ```markdown
> .var {greeting} {Hello, world}
> 
> .greeting::match {world}
>     **.1**
> ```
> 
> Hello, **world**

## Inside a function extension

A common use case is rewriting a function’s output through a regex transformation. For example, you can extend `.heading` so every occurrence of certain words is highlighted across all headings in the document:

> **Example 4**
> 
> ```markdown
> .extend {heading}
>     content:
>     .super
>         .content::match {[Qq]uark(down|s)?}
>             *.1::uppercase*
> 
> ###! Quarkdown takes its name from quarks
> ```
> 
> ### Quarkdown takes its name from quarks