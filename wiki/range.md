# Range

The syntax for defining a range is **`a..b`**, where `a` and `b` are non-negative integers, for example `2..10`.

You can omit either `a` or `b`, in which case the range becomes *open*.

Depending on the number of delimiters provided, a range can be classified as:

- Closed range: `a..b`
- Open on the left end: `..b`
- Open on the right end: `a..`
- Open on both ends: `..`

The behavior of open ranges is not universally defined. Each function that accepts a range defines its own behavior. See [`.read`](file-text-content.qd) as an example, whose strategy is common for slicing operations across the standard library.

The `..` operator is syntactic sugar for the **`.range {from} {to}`** function, with the difference that the operator accepts only literal values. When the ends of the range need to be evaluated dynamically, such as through a mathematical operation, `.range` is the appropriate choice.

> **Example 1**
> 
> ```markdown
> .code
>     .read {assets/point.ts}
> ```
> 
> ```
> export class Point {
>     x: number;
>     y: number;
> 
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```

> **Example 2**
> 
> ```markdown
> .code
>     .read {assets/point.ts} lines:{5..7}
> ```
> 
> ```
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
> ```

> **Example 3**
> 
> ```markdown
> .code 
>     .read {assets/point.ts} lines:{..3}
> ```
> 
> ```
> export class Point {
>     x: number;
>     y: number;
> ```

> **Example 4**
> 
> ```markdown
> .code
>     .read {assets/point.ts} lines:{5..}
> ```
> 
> ```
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```