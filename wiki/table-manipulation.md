> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Table manipulation

This page describes table manipulation functions  that allow you to sort, filter, and compute values from any kind of table, including plain Markdown ones and those [loaded from CSV](table-from-csv.qd).

> **Example 1**
> 
> ```markdown
> .tablesort {2} order:{descending}
>     .csv {assets/people.csv}
> ```
> 
> | Username | Birth year | Favorite food | Favorite drink |
> | --- | --- | --- | --- |
> | iamgio | 2002 | Pasta | Iced tea |
> | john | 1992 | Chicken | Orange juice |
> | daniel | 1986 | Sushi | Beer |

## Sort rows

The **`.tablesort`** function sorts a table based on the values of a specific column.

| Parameter | Description | Accepts |
| --- | --- | --- |
| `column` | Index of the column, starting from 1. | 1 to number of columns. |
| `order` | Sorting order. | `ascending` (default), `descending` |

> **Example 2**
> 
> ```markdown
> .tablesort {2} order:{descending}
>     | Name | Age | City |
>     |------|-----|------|
>     | John | 25  | NY   |
>     | Lisa | 32  | LA   |
>     | Mike | 19  | CHI  |
> ```
> 
> | Name | Age | City |
> | --- | --- | --- |
> | Lisa | 32 | LA |
> | John | 25 | NY |
> | Mike | 19 | CHI |

> **Example 3**
> 
> The sorting follows the most natural way for humans to sort strings (*alphanumeric* sorting):
> 
> ```markdown
> .tablesort {2}
>     |   Item   | Price |
>     |----------|-------|
>     | Pencil   | $1    |
>     | Eraser   | $0.50 |
>     | Backpack | $20   |
>     | Notebook | $3    |
> ```
> 
> | Item | Price |
> | --- | --- |
> | Eraser | \$0.50 |
> | Pencil | \$1 |
> | Notebook | \$3 |
> | Backpack | \$20 |

## Filter rows

The **`.tablefilter`** function keeps or removes rows based on the values of a specific column.

| Parameter | Description | Accepts |
| --- | --- | --- |
| `column` | Index of the column, starting from 1. | 1 to number of columns. |
| `filter` | Lambda that returns whether each row should be kept, with the value of its cell in the corresponding column as input. | [`Dynamic`](typing.qd) → [`Boolean`](boolean.qd) [lambda](lambda.qd) |

> **Example 4**
> 
> ```markdown
> .tablefilter {2} {x: .x::isgreater {20}}
>     | Name | Age | City |
>     |------|-----|------|
>     | John | 25  | NY   |
>     | Lisa | 32  | LA   |
>     | Mike | 19  | CHI  |
> ```
> 
> | Name | Age | City |
> | --- | --- | --- |
> | John | 25 | NY |
> | Lisa | 32 | LA |

## Compute/aggregate columns

The **`.tablecompute`** function computes the cells in a column and appends the result to a new row.

| Parameter | Description | Accepts |
| --- | --- | --- |
| `column` | Index of the column, starting from 1. | 1 to number of columns. |
| `compute` | Lambda that returns the computed value, with the collection of the cells in the column as input. | [`Iterable`](iterable.qd) → [`Dynamic`](typing.qd) [lambda](lambda.qd) |

See [*Iterable*](iterable.qd) to learn more about available operations on collections.

> **Example 5**
> 
> ```markdown
> .tablecompute {2} {x: .x::average::round}
>     | Name | Age | City |
>     |------|-----|------|
>     | John | 25  | NY   |
>     | Lisa | 32  | LA   |
>     | Mike | 19  | CHI  |
> ```
> 
> | Name | Age | City |
> | --- | --- | --- |
> | John | 25 | NY |
> | Lisa | 32 | LA |
> | Mike | 19 | CHI |
> |  | 25 |  |

## Composition

You can chain multiple table operations. The order of operations goes from inner to outer:

> **Example 6**
> 
> ```markdown
> .tablecompute {2} {x: .x::average::round}
>     .tablesort {2}
>         | Name | Age | City |
>         |------|-----|------|
>         | John | 25  | NY   |
>         | Lisa | 32  | LA   |
>         | Mike | 19  | CHI  |
> ```
> 
> | Name | Age | City |
> | --- | --- | --- |
> | Mike | 19 | CHI |
> | John | 25 | NY |
> | Lisa | 32 | LA |
> |  | 25 |  |

## Retrieve columns

The **`.tablecolumn`** function extracts values from the cells of a specific column and returns them as an [Iterable](iterable.qd).

| Parameter | Description | Accepts |
| --- | --- | --- |
| `column` | Index of the column, starting from 1. | 1 to number of columns. |

> **Example 7**
> 
> ```markdown
> .var {values}
>     .tablecolumn {2}
>         | Name | Age | City |
>         |------|-----|------|
>         | John | 25  | NY   |
>         | Lisa | 32  | LA   |
>         | Mike | 19  | CHI  |
> 
> .values::first
> ```
> 
> 25

## Bulk-retrieve columns

Additionally, the **`.tablecolumns`** function returns all the columns from the table as an iterable of iterables. This is more efficient when you need to access multiple columns from the same table, compared to calling `.tablecolumn` multiple times.

> **Example 8**
> 
> ```markdown
> .var {columns}
>     .tablecolumns
>         | Name | Age | City |
>         |------|-----|------|
>         | John | 25  | NY   |
>         | Lisa | 32  | LA   |
>         | Mike | 19  | CHI  |
> 
> .foreach {.columns}
>     col:
>     .col::first
> ```
> 
> John
> 
> 25
> 
> NY