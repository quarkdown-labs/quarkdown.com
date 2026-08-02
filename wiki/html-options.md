> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# HTML options

The **`.htmloptions`**  function configures HTML-specific generation settings.

```markdown
.htmloptions baseurl:{https://example.com}
```

## Base URL

The `baseurl` parameter sets the base URL of the generated website for SEO purposes. When specified:

- A `<link rel="canonical">` tag is added to each page, helping search engines identify the preferred URL for each [subdocument](subdocuments.md).
- A `sitemap.xml` is generated if there’s at least one subdocument.

```markdown
.htmloptions baseurl:{https://example.com}
```

> Setting a base URL is recommended when publishing a Quarkdown document as a website, especially for `docs` projects with multiple subdocuments.

## Custom title

The `title` parameter overrides the text shown in the browser tab and in search engine results, independently of the document name set via `.docname`.

```markdown
.docname {Quarkdown}
.htmloptions title:{Quarkdown | Markdown with superpowers}
```