> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Docs library

The built-in [`docs`](https://github.com/iamgio/quarkdown/blob/main/quarkdown-libs/src/main/resources/docs.qd) library is written in Quarkdown and provides the standard structure for a [`docs` document](document-types.md#docs-docs), with sidebars, navigation, and a table of contents.

This library is the recommended way to set up a documentation project, and it is what this wiki uses. It wraps the raw `.doctype {docs}` setup into a simple, customizable include.

> When creating a project via [`quarkdown create`](cli-project-creator.md), the generated project is already set up to use the `docs` library.

The first step is to [import](importing-external-libraries.md) the library:

```markdown
.include {docs}
```

> You do not need to call `.doctype {docs}` yourself. The library handles it.

## Project structure

A project that uses the `docs` library is expected to have a similar structure:

- \_setup.qd
- \_nav.qd
- main.qd
- page-1.qd
- page-2.qd
- ...

- **`_setup.qd`**, containing shared configuration such as [themes](themes.md), [fonts](font-configuration.md), custom [functions](declaring-functions.md) and [variables](variables.md). This file is included automatically by the library.
- **`_nav.qd`** containing the navigation links that populate the page list sidebar. This file is included automatically by the library.
- **`main.qd`**, the home page of the documentation, and entry point of the compilation.
- Each other `.qd` file is a [subdocument](subdocuments.md), and should include the library at the top:

  ```markdown
  .docname {My page}
  .include {docs}

  Content goes here.
  ```

The library takes care of the following:

1. Setting the document type to `docs`
2. Including `_setup.qd` from the project root
3. Placing the navigation from `_nav.qd` in the left sidebar via [`.pagemargin`](page-margin-content.md) and [`.navigation`](https://quarkdown.com/docs/quarkdown-stdlib/com.quarkdown.stdlib.module.Document/navigation-container.html)
4. Placing a [table of contents](table-of-contents.md) in the right sidebar
5. Adding a [decorative heading](headings.md#decorative-headings) from [`.docname`](document-metadata.md)

## Setup file

The `_setup.qd` file is a good place for project-wide configuration shared across all subdocuments.

> **Example 1**
> 
> > `_setup.qd`
> 
> ```markdown
> .doclang {English}
> .theme {darko} layout:{minimal}
> 
> .pagemargin {topright}
>     [GitHub](https://github.com/iamgio/quarkdown)
> ```

## Navigation file

The `_nav.qd` file contains the links that appear in the page list sidebar. It consists of a list of links to subdocuments, optionally grouped by [decorative headings](headings.md#decorative-headings):

> **Example 2**
> 
> > `_nav.qd`
> 
> ```markdown
> ###! Getting started
> - [Quickstart](quickstart.qd)
> 
> ###! Topics
> - [Page 1](page-1.qd)
> - [Page 2](page-2.qd)
>   - [Section A](page-2.qd#section-a)
> ```

The current page is automatically highlighted in the sidebar.

## Customization

By default, the page list appears in the left sidebar and the table of contents in the right sidebar.

You can swap or change these positions by overriding two variables in your `_setup.qd` file:

| Variable | Default | Description |
| --- | --- | --- |
| `pagelistposition` | `lefttop` | [Position](page-margin-content.md) of the page list sidebar |
| `tocposition` | `righttop` | [Position](page-margin-content.md) of the table of contents sidebar |

> **Example 3**
> 
> > `_setup.qd`
> 
> ```markdown
> .theme {darko}
> 
> .pagelistposition {righttop}
> .tocposition {lefttop}
> ```

## Orphan pages

Note that, by design, Quarkdown does not compile orphan source files. In order to be compiled as a [subdocument](subdocuments.md), a source file must be referenced by another file, be it in `_nav.qd` or in the content of another page.