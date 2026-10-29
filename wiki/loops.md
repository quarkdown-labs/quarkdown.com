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

### Indices

To keep track of the position of each element, loop on the result of **`.withindices`**. It pairs each element with its index, starting at 1, as a [dictionary](dictionary.md), which can be [destructured](destructuring.md) into the index and the element.

> **Example 5**
> 
> ```markdown
> .var {letters}
>   - A
>   - B
>   - C
> 
> .letters::withindices::foreach
>     index letter:
>     .index .letter
> ```
> 
> 1 A
> 
> 2 B
> 
> 3 C

## Repeat

The **`.repeat {times}`** function is a shorthand for `.foreach {1..times}`.

> **Example 6**
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

## Join

The **`.join`** function merges the elements of an iterable into a single inline content, separated by `, ` or by a custom `separator`.

> **Example 7**
> 
> ```markdown
> .var {letters}
>   - A
>   - B
>   - C
> 
> .letters::join
> ```
> 
> A, B, C

Like `.foreach`, it accepts a [lambda](lambda.md) block that transforms each element before joining.

> **Example 8**
> 
> ```markdown
> .var {letters}
>   - A
>   - B
>   - C
> 
> .letters::withindices::join
>     index letter:
>     .index::text script:{sup} **.letter**
> ```
> 
> 1 **A**, 2 **B**, 3 **C**

## Find elements

The **`.findfirst`** function loops over an iterable until an element satisfies a condition, and returns that element.
Like `.foreach`, it accepts an [`Iterable`](iterable.md) value and a single-parameter [lambda](lambda.md) block, which must return a [boolean](boolean.md).

If no element satisfies the condition, the result is [`none`](none.md).

> **Example 9**
> 
> ```markdown
> .var {numbers}
>   - 3
>   - 8
>   - 12
> 
> .numbers::findfirst {n: .n::isgreater than:{5}}
> ```
> 
> 8

> **Example 10**
> 
> Here, we look up an element’s index within a list.
> 
> ```markdown
> .var {letters}
>   - A
>   - B
>   - C
> 
> .letters::withindices::findfirst {index letter: .letter::equals {B}}::first
> ```
> 
> 2

The **`.findall`** function works the same way, but returns a collection of all the elements that satisfy the condition.

> **Example 11**
> 
> ```markdown
> .var {numbers}
>   - 3
>   - 8
>   - 12
> 
> .numbers::findall {n: .n::isgreater than:{5}}::join
> ```
> 
> 8, 12