> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Data from JSON

The **`.json {path}`**  function loads a JSON file and returns its content ready to use in your document.

> The `path` parameter can be either a path relative to the main source file’s location or an absolute path. Use a slash (`/`) as the path separator, regardless of the operating system.

The shape of the returned value depends on the top-level JSON value:

- A JSON *object* is loaded as a [dictionary](dictionary.md), which you can query with [`.get`](dictionary.md).
- A JSON *array* is loaded as an [iterable](iterable.md), which you can iterate with [`.foreach`](loops.md) or manipulate with any iterable operation.

> **Example 1**
> 
> ```markdown
> .code {json}
>     .read {assets/config.json}
> 
> .json {assets/config.json}::get {database}::get {host}
> ```
> 
> ```json
> {
>   "name": "Quarkdown",
>   "database": {
>     "host": "localhost",
>     "port": 5432
>   },
>   "features": ["math", "diagrams", "footnotes"]
> }
> ```
> 
> localhost

> **Example 2**
> 
> ```markdown
> .code {json}
>     .read {assets/people.json}
> 
> .json {assets/people.json}::foreach
>     **.1::get {name}** is from .1::get {address}::get {country}
> ```
> 
> ```json
> [
>   {"name": "Alice", "address": {"country": "USA"}},
>   {"name": "Bob", "address": {"country": "Italy"}},
>   {"name": "Carol", "address": {"country": "Japan"}}
> ]
> ```
> 
> **Alice** is from USA
> 
> **Bob** is from Italy
> 
> **Carol** is from Japan