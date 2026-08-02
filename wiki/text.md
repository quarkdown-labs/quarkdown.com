# Text

The **`.text`** inline function provides extensive text formatting that cannot be expressed in plain Markdown.

| Parameter | Accepts |
| --- | --- |
| **`text`** (mandatory) | Inline content. |
| **`size`** | `tiny` (50%), `small` (75%), `normal` (100%), `medium` (125%), `large` (150%), `larger` (200%), `huge` (300%) |
| **`weight`** | `normal`, `bold` |
| **`style`** | `normal`, `italic` |
| **`decoration`** | `underline`, `overline`, `underoverline`, `strikethrough`, `all` |
| **`case`** | `uppercase`, `lowercase`, `capitalize` |
| **`variant`** | `normal`, `smallcaps` |
| **`script`** | `sub` (subscript), `sup` (superscript) |
| **`url`** | URL to link to. If set, the text becomes a link. If the URL is set but empty, the text content itself is used as the URL (assuming it represents a valid URL). |

> **Example 1**
> 
> ```markdown
> ##! A demo of .text {Quarkdown} variant:{smallcaps}
> 
> The .text {quick brown fox} size:{large} decoration:{underoverline} jumps over the lazy dog.
> ```
> 
> ## A demo of Quarkdown
> 
> The quick brown fox jumps over the lazy dog.