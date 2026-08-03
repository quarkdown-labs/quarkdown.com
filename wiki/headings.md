> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Headings

The **`.heading {content} {depth}`**  function creates a heading with fine-grained control over its behavior.

Unlike standard Markdown headings (`#`, `##`, etc.), this function allows explicit control over numbering, page breaks, table of contents indexing, and custom identifiers.

## Parameters

| Parameter | Description | Accepts | Default |
| --- | --- | --- | --- |
| `content` | Inline content of the heading. | Inline content | Required |
| `depth` | Importance level of the heading (1 for H1, 6 for H6). | Integer (1-6) | Required |
| `ref` | Custom identifier for [cross-referencing](cross-references.md). If unset, the ID is automatically generated. | String | Unset |
| `numbered` | Whether the heading is [numbered](numbering.md) and has its position tracked in the document hierarchy. Actual numbering depends on the active `.numbering` configuration. | Boolean | `yes` |
| `indexed` | Whether the heading appears in the [table of contents](table-of-contents.md) and navigation sidebar. | Boolean | `yes` |
| `breakpage` | Whether the heading triggers an automatic [page break](page-break.md#automatic-break). | Boolean | `yes` |

## Basic usage

> **Example 1**
> 
> This is equivalent to `## My heading` in standard Markdown.
> 
> ```markdown
> .heading {My heading} depth:{2}
> ```
> 
> ## My heading

## Controlling numbering

You can create headings that are not tracked by the [numbering](numbering.md) system:

```markdown
.heading {Appendix} depth:{1} numbered:{no}
```

Unlike [decorative headings](decorative-headings.md) (`#!`), this approach lets you independently control whether the heading appears in the table of contents.

## Controlling table of contents indexing

By default, headings appear in the [table of contents](table-of-contents.md) and navigation sidebar of `plain` and `paged` documents. You can exclude a heading while still allowing it to be numbered:

```markdown
.heading {Secret section} depth:{2} indexed:{no}
```

Conversely, you can include an unnumbered heading in the table of contents:

```markdown
.heading {Acknowledgments} depth:{1} numbered:{no} indexed:{yes}
```

## Disabling page breaks

By default, headings trigger automatic page breaks (when [`.autopagebreak`](page-break.md#automatic-break) is enabled). You can disable this for individual headings:

```markdown
.heading {Continued} depth:{1} breakpage:{no}
```

## Custom identifiers

You can assign a custom identifier for [cross-referencing](cross-references.md):

```markdown
.heading {Introduction} depth:{2} ref:{intro}
```

## Styling

`.heading` accepts every option described on [*Element styling properties*](element-styling-properties.md), for customizing colors, spacing, borders, and text appearance.

> **Example 2**
> 
> ```markdown
> .heading {Introduction} depth:{2} foreground:{teal} fontvariant:{smallcaps} indexed:{no}
> ```
> 
> ## Introduction

## Decorative headings

See also [Decorative headings](decorative-headings.md) for headings excluded from numbering and the table of contents.