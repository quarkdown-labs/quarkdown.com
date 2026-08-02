> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# File name

The **`.filename {path} {extension?}`**  function returns the file name from a given file path. The optional `extension` boolean parameter controls whether the file extension is included in the result.

> The `path` parameter can be either a path relative to the main source file’s location or an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

> **Example 1**
> 
> ```markdown
> .filename {assets/point.ts} extension:{no}
> ```
> 
> point

This can be particularly useful when combined with [`.listfiles`](listing-files.md).