> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Table from CSV

The **`.csv {path} {mode?} {caption?}`**  function loads a table from a CSV file. The first row of the CSV file always serves as the header row.

> The `path` parameter can be either a path relative to the main source file’s location or an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

Tables loaded from CSV can also be manipulated. See [*Table manipulation*](table-manipulation.qd) for more information.

> **Example 1**
> 
> ```markdown
> .csv {assets/people.csv}
> ```
> 
> | Username | Birth year | Favorite food | Favorite drink |
> | --- | --- | --- | --- |
> | john | 1992 | Chicken | Orange juice |
> | iamgio | 2002 | Pasta | Iced tea |
> | daniel | 1986 | Sushi | Beer |

You can also provide a caption.

> **Example 2**
> 
> ```markdown
> .csv {assets/people.csv} caption:{People data.}
> ```
> 
> | Username | Birth year | Favorite food | Favorite drink |
> | --- | --- | --- | --- |
> | john | 1992 | Chicken | Orange juice |
> | iamgio | 2002 | Pasta | Iced tea |
> | daniel | 1986 | Sushi | Beer |
> 
> People data.

The `mode` parameter controls how the CSV file is parsed. It defaults to `plain`, which treats all cell content as plain text. If set to `markdown`, Quarkdown parses cell content as inline Quarkdown source code, allowing formatting, rich content, and inline function calls within the CSV.

```markdown
Name,  Favorite drink, Age *(as of 2026)*
Alice, Coffee,         .subtract {2026} {1995}
Bob,   *Pepsi*,        .subtract {2026} {2001}
```

> **Example 3**
> 
> ```markdown
> .csv {assets/people2.csv} mode:{markdown}
> ```
> 
> | Name | Favorite drink | Age *(as of 2026)* |
> | --- | --- | --- |
> | Alice | Coffee | 31 |
> | Bob | *Pepsi* | 25 |