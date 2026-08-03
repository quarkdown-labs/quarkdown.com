> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# HTML

Standard Markdown specifications allow freely mixing Markdown and HTML, as they are meant to be implemented by parsers that solely rely on HTML rendering.

```markdown
**Hello** <em>world</em>!
```

On the other hand, Quarkdown strongly encourages **target agnosticism** in order to maintain rendering consistency across all supported rendering targets.

At this time, only HTML rendering is supported (note: PDF export is not a rendering target, as it works on top of HTML post-processing). There are however future plans to bring support to more targets, such as LaTeX. In that case, HTML content cannot be handled by the native target anymore.

For this reason, Quarkdown dropped mixed content support and focused on covering the most frequent HTML workarounds with dedicated functions.

> **Example 1**
> 
> - A collapsible block in standard Markdown via HTML:
> 
>   ```html
>   <details>
>   <summary>Title of the collapsible block</summary>
>   Content of the collapsible block.
>   </details>
>   ```
> - The same in Quarkdown, using the [`.collapse`](collapsible.md) function:
> 
>   ```markdown
>   .collapse {Title of the collapsible block}
>       Content of the collapsible block.
>   ```

> **Example 2**
> 
> - A styled container in HTML:
> 
>   ```html
>   <div style="border: 1px solid black; padding: 8px;">
>       This is a styled container.
>   </div>
>   ```
> - The same in Quarkdown, using [`.container`](container.md):
> 
>   ```markdown
>   .container border:{black} borderwidth:{1} padding:{8}
>       This is a styled container.
>   ```

## Forcing HTML injection

As a last resort, if the functionality you are looking for is not supported out of the box, you might consider calling the `.html` function, which directly renders its content into the final document, as long as the rendering target is HTML.

> **Example 3**
> 
> ```markdown
> **Hello** .html {<em>world</em>}!
> ```
> 
> **Hello** !

> **Example 4**
> 
> ```markdown
> .html
>     <div style="transform: scaleY(0.6);">
>         My HTML container
>     </div>
> ```

> - The rendered output is unsanitized content, possibly vulnerable.
> - This approach is not target-agnostic, as other rendering targets will ignore the provided content.