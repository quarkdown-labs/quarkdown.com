> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Element styling properties

Several functions, such as [`.container`](container.md) and [`.heading`](headings.md), share a common set of styling parameters to customize colors, spacing, borders, and text appearance of the element they produce.

## Parameters

| Parameter | Description | Accepts | Default |
| --- | --- | --- | --- |
| `foreground` | Text color. | [`Color`](color.md) | Document’s default |
| `background` | Background color. | [`Color`](color.md) | None |
| `border` | Border color. | [`Color`](color.md) | Browser’s default if `borderwidth` is set, none otherwise |
| `borderwidth` | Border thickness. | [`Sizes`](sizes.md) | Browser’s default if `border` is set, none otherwise |
| `borderstyle` | Border type. | `normal`, `dashed`, `dotted`, `double` | `normal` if `border` or `borderwidth` is set, none otherwise |
| `margin` | Whitespace outside the element. | [`Sizes`](sizes.md) | None |
| `padding` | Whitespace between the border and the content. | [`Sizes`](sizes.md) | None |
| `radius` | Corner (and border) radius. | [`Sizes`](sizes.md) | None |
| `alignment` | Content alignment. | `start`, `center`, `end` | Browser’s default |
| `textalignment` | Text alignment. | `start`, `center`, `end`, `justify` | Follows `alignment` if set |
| `fontsize`, `fontweight`, `fontstyle`, `fontvariant`, `textdecoration`, `textcase` | Text transformation. See [Advanced text formatting](text.md) for the accepted values. |  | None |

## Example

> **Example 1**
> 
> ```markdown
> .container fullwidth:{yes} borderstyle:{dashed} padding:{1cm} fontsize:{medium} fontstyle:{italic} fontvariant:{smallcaps}
>     This is a styled container. Fancy, isn't it?
> 
>     Quarkdown can truly give life to complex layouts with ease.
> ```
> 
> This is a styled container. Fancy, isn’t it?
> 
> Quarkdown can truly give life to complex layouts with ease.