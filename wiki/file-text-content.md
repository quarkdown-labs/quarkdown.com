> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# File text content

The **`.read {path}`**  function returns the string content of the specified file.

> The `path` parameter can be either a path relative to the main source file’s location or an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

An optional `lines` parameter of type [`Range`](range.md) selects a specific range of lines (inclusive, starting from 1). An invalid or out-of-bounds range causes an error. If you do not provide a range, Quarkdown reads the entire file.

```markdown
.read {myfile.txt} lines:{3..8}
```

Open ranges work as follows:

- If the range is open on the left end (`..N`), Quarkdown reads from the beginning of the file to line `N`.
- If the range is open on the right end (`N..`), Quarkdown reads from line `N` to the end of the file.
- If the range is open on both ends (`..`), Quarkdown reads the entire file.

> **Example 1**
> 
> `.read` is particularly useful in combination with functions such as [`.code`](code.md), [`.mermaid`](mermaid-diagrams.md) and [`.css`](css.md) to load code snippets from external files.
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