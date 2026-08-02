> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Book cover

A common pattern for [paged documents](document-types.qd) is a full-bleed cover page, where an image spans the entire first page. This is achieved by combining:

- [`.pageformat`](page-format.qd) to remove margins on the first page;
- [`.container`](container.qd) to hold a full-width image.

> **Example 1**
> 
> ```markdown
> .doctype {paged}
> 
> .pageformat pages:{..1} margin:{0}
> 
> .container fullwidth:{yes} margin:{0}
>     !(100%)[Cover](cover.png)
> 
> # Introduction
> 
> ...
> ```
> 
> <img src="media/result@1475823167.png" alt="Book cover" width="500.0px" />