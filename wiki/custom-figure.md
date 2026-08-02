> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Custom figure

The **`.figure {caption?} {body}`** function generalizes the [image figures](figure.md) syntax extension by allowing any content to be treated as a *figure* block. This means the content:

- Can have a caption
- Can be numbered – see [Numbering](numbering.md)

> **Example **
> 
> ```markdown
> .figure caption:{My caption.}
>     .container padding:{1cm} background:{teal}
>         Hello, world!
> ```
> 
> Hello, world!
> My caption.