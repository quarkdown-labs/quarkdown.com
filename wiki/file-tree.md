> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# File Tree

The **`.filetree`**  function creates a visual file tree from a standard Markdown list.
Each inline item becomes a file by default; entries with nested children (or a trailing slash marker) become directories.

Use a trailing slash (`/`) to explicitly mark an entry as a directory, even when it has no children.
The slash is only a marker and is not rendered.

> **Example 1**
> 
> ```markdown
> .filetree
>     - src
>       - components
>         - Button.ts
>         - Card.ts
>       - index.ts
>     - target/
>     - README.md
> ```
> 
> - src/
> 
>   - components/
> 
>     - Button.ts
>     - Card.ts
>   - index.ts
> - target/
> - README.md

## Ellipsis

An item with `...` as its text is rendered as an ellipsis, representing omitted content in the tree.

> **Example 2**
> 
> ```markdown
> .filetree
>     - src
>       - main.ts
>       - ...
>     - LICENSE
>     - README.md
> ```
> 
> - src/
> 
>   - main.ts
>   - ...
> - LICENSE
> - README.md

## Highlighting entries

Wrapping an entry’s name in **bold** (`**...**`) highlights it, useful for drawing attention to specific files or directories.

> **Example 3**
> 
> ```markdown
> .filetree
>     - **src**
>       - main.ts
>       - utils.ts
>     - LICENSE
>     - **README.md**
> ```
> 
> - src/
> 
>   - main.ts
>   - utils.ts
> - LICENSE
> - README.md