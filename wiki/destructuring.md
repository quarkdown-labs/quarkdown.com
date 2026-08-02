> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Destructuring

Destructuring splits a [lambda](lambda.md) parameter into its individual components. For instance, a [pair](iterable.md#pair) has two components, while a generic [iterable](iterable.md) can have many.

The following types support destructuring:

- [`Iterable`](iterable.md), including [`Pair`](iterable.md#pair)
- [`Dictionary`](dictionary.md), as an iterable of pairs

A value is destructured into `N` components when all of the following conditions are met:

- The type supports destructuring
- The lambda expects a single argument, such as with [`.foreach`](loops.md)
- You supply `N > 1` lambda parameters

When Quarkdown destructures the lambda argument, it operates on the individual components rather than the element itself.

## Example: `.foreach`

In this example, we define a [Dictionary](dictionary.md) and iterate over its destructured key-value components.

> **Example 1**
> 
> ```markdown
> .var {mydictionary}
>     .dictionary
>         - a: 1
>         - b: 2
>         - c: 3
> 
> .foreach {.mydictionary}
>     key value:
>     **.key** has value **.value**
> ```
> 
> **a** has value **1**
> 
> **b** has value **2**
> 
> **c** has value **3**

## Example: `.sorted`

In this example, we define a [Dictionary](dictionary.md) and iterate over its destructured key-value components using `.foreach`, but only after sorting its entries by value using [`.sorted`](iterable.md#operations), which takes a lambda that defines the ordering criteria.

> **Example 2**
> 
> ```markdown
> .var {mydictionary}
>     .dictionary
>         - a: 3
>         - b: 1
>         - c: 2
> 
> .foreach {.mydictionary::sorted by:{name value: .value}}
>     name value:
>     .name
> ```
> 
> b
> 
> c
> 
> a