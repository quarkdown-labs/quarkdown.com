> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Listing files

The **`.listfiles {path} {directories?} {recursive?} {pattern?} {fullpath?} {sortby?} {order?}`**  function returns an [iterable](iterable.qd) of entries from a directory.

By default, the result is an *unordered* collection of absolute paths to the immediate children of the directory at `path`. The path is interpreted relative to the main source file’s location, or as an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

> For the following examples, assume the following directory structure:
> 
> - assets/
> 
>   - folder/
> 
>     - file1.txt
>     - file2.txt
>     - file3.md
>     - subfolder/
> 
>       - nested-file1.txt
>       - nested-file2.txt
>       - nested-file3.md

> **Example 1**
> 
> ```markdown
> .listfiles {assets/folder} fullpath:{no}
> ```
> 
> - file1.txt
> - subfolder
> - file2.txt
> - file3.md

The result is an iterable value, that can be passed to [`.foreach`](loops.qd).

> **Example 2**
> 
> ```markdown
> .foreach {.listfiles {assets/folder} fullpath:{no}}
>     name:
>     **File:** .name
> ```
> 
> **File:** file1.txt
> 
> **File:** subfolder
> 
> **File:** file2.txt
> 
> **File:** file3.md

## Full paths

By default, each entry is returned as its absolute path:

> **Example 3**
> 
> ```markdown
> .listfiles {assets/folder}
> ```
> 
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file1.txt
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/subfolder
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file2.txt
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file3.md

This can be used in combination with [`.read`](file-text-content.qd) to load file content:

> **Example 4**
> 
> ```markdown
> .foreach {.listfiles {assets/folder} directories:{no}}
>     path:
>     Content of .path::filename::codespan is .path::read::codespan
> ```
> 
> Content of `file1.txt` is `File 1`
> 
> Content of `file2.txt` is `File 2`
> 
> Content of `file3.md` is `File 3`

## Recursive traversal

Setting `recursive:{yes}` walks every nested subdirectory and returns all descendants, not just the immediate children.

> **Example 5**
> 
> ```markdown
> .listfiles {assets/folder} recursive:{yes} fullpath:{no}
> ```
> 
> - file1.txt
> - subfolder
> - nested-file3.md
> - nested-file1.txt
> - nested-file2.txt
> - file2.txt
> - file3.md

The root directory itself is never included in the result.

## Filtering by name

Passing a `pattern` keeps only entries whose **bare file name** matches the given regular expression. The pattern always applies to the file name alone (never to a directory path), regardless of `fullpath` or `recursive`.

> **Example 6**
> 
> ```markdown
> .listfiles {assets/folder} pattern:{.*\.txt} recursive:{yes} fullpath:{no}
> ```
> 
> - file1.txt
> - nested-file1.txt
> - nested-file2.txt
> - file2.txt

## Excluding directories

Set `directories:{no}` to keep only files in the result, omitting subdirectories from the output:

> **Example 7**
> 
> ```markdown
> .listfiles {assets/folder} directories:{no}
> ```
> 
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file1.txt
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file2.txt
> - /home/runner/work/quarkdown/quarkdown/docs/./assets/folder/file3.md

## Sorting

By default, the order of the result is unspecified, and the returned iterable is unordered. Picking a sort criterion via `sortby` switches the result to an ordered iterable:

| Value | Effect |
| --- | --- |
| `none` | No sorting; the result is an unordered collection (default). |
| `name` | Sort by file name, using a human-friendly alphanumeric comparator. |
| `lastmodified` | Sort by the file’s last-modified timestamp. |

The `order` parameter then chooses the direction:

- `ascending` (default): smallest first (A-Z, oldest first).
- `descending`: largest first (Z-A, newest first).

> **Example 8**
> 
> ```markdown
> .listfiles {assets/folder} sortby:{name} order:{descending} fullpath:{no}
> ```
> 
> 1. subfolder
> 2. file3.md
> 3. file2.txt
> 4. file1.txt

## Bulk inclusion of sources

Because the result is iterable, it composes naturally with [`.includeall`](including-other-quarkdown-files.qd):

> **Example 9**
> 
> This loads every file under `chapters/` in alphabetical order:
> 
> ```markdown
> .listfiles {chapters} sortby:{name}::includeall
> ```

## Permissions

`.listfiles` follows the same permission model as the other file-reading functions:

- Listing under the project directory requires the `project-read` [permission](cli-compiler.qd) (granted by default).
- Listing outside the project directory requires `global-read` (opt-in).