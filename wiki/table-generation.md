> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Table generation

## Table generation by columns

The **`.table`** function takes a single block argument which is an [iterable](iterable.qd) of **tables**.
The result of the call is a **new table** that combines the supplied tables **by columns**.

In the following example, `.repeat` is used, which, like other supported [loops](loops.qd), returns the results from each iteration as an iterable.

> **Example 1**
> 
> ```markdown
> .table
>     .repeat {3}
>         n:
>         | Column .n |
>         |-----------|
>         | Cell .n:1 |
>         | Cell .n:2 |
>         | Cell .n:3 |
> ```
> 
> | Column 1 | Column 2 | Column 3 |
> | --- | --- | --- |
> | Cell 1:1 | Cell 2:1 | Cell 3:1 |
> | Cell 1:2 | Cell 2:2 | Cell 3:2 |
> | Cell 1:3 | Cell 2:3 | Cell 3:3 |

## Table generation by rows

The **`.tablebyrows`**  function takes two arguments: an optional iterable of headers and an iterable of rows.

> **Example 2**
> 
> ```markdown
> .var {headers}
>    - Name
>    - Age
>    - City
> 
> .tablebyrows {.headers}
>     - - John
>       - 25
>       - NY
>     - - Lisa
>       - 32
>       - LA
>     - - Mike
>       - 19
>       - CHI
> ```
> 
> | Name | Age | City |
> | --- | --- | --- |
> | John | 25 | NY |
> | Lisa | 32 | LA |
> | Mike | 19 | CHI |

> **Example 3**
> 
> If no headers are provided, the table will have no header row. Additionally, dynamic content can be used to generate cells:
> 
> ```markdown
> .tablebyrows
>     .repeat {3}
>         y:
>         .repeat {3}
>             x:
>             Cell .x:.y
> ```
> 
> |  |  |  |
> | --- | --- | --- |
> | Cell 1:1 | Cell 2:1 | Cell 3:1 |
> | Cell 1:2 | Cell 2:2 | Cell 3:2 |
> | Cell 1:3 | Cell 2:3 | Cell 3:3 |