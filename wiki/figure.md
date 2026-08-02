> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Figure

Quarkdown introduces the concept of **figure**, which is missing in base Markdown. A figure wraps an image and centers it horizontally. When a paragraph contains only a single image (in other words, the image is isolated from other content), Quarkdown automatically converts it into a figure.

> **Example 1**
> 
> ```markdown
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> 
> ![Icon](assets/icon.svg)
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> ```
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
> 
> ![Icon](media/icon@-1965017468.svg)
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit.

> The [image size](image-size.md) feature works on figures as well.

## Caption

If the image contains a *title* attribute (wrapped in double quotes, single quotes, or parentheses), Quarkdown displays it as a caption.

> **Example 2**
> 
> ```markdown
> ![Icon](assets/icon.svg "The Quarkdown icon.")
> ```
> 
> ![Icon](media/icon@-1965017468.svg "The Quarkdown icon.")
> The Quarkdown icon.

> Figures can be **numbered**. See [Numbering](numbering.md) for more information.