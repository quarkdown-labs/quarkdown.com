# Including other Quarkdown files

The **`.include {file} {sandbox?}`**  function loads and evaluates an external Quarkdown source file.

The parameter accepts a string that represents the **path to the target file**, which can be relative to the main source file’s location or absolute.

> To include external libraries, refer to [*Importing external libraries*](importing-external-libraries.qd).

> **Example 1**
> 
> > `file.qd`
> > 
> > ```markdown
> > ### Hello Quarkdown
> > 
> > This is external content.
> > ```
> 
> > `main.qd`
> > 
> > ```markdown
> > .include {file.qd}
> > ```
> 
> ### Hello Quarkdown
> 
> This is external content.

> Circular dependency results in an error.

> Do not confuse inclusion with [subdocuments](subdocuments.qd).
> See [*Inclusion vs. subdocuments*](inclusion-vs-subdocuments.qd) for a comparison.

## Bulk include

A clean approach with typesetting systems is having a main file that gathers all the different subfiles together. The `.includeall` function, which takes an [Iterable](iterable.qd) of paths, serves as a convenient shorthand for repeated `.include` calls.

The following snippet is from [Mock](https://github.com/iamgio/quarkdown/blob/main/mock)’s `main.qd` file:

```markdown
.includeall
    - setup.qd
    - headings.qd
    - paragraphs.qd
    - lists.qd
    - images.qd
    - tables.qd
    - code.qd
    - textformatting.qd
    - colorpreview.qd
    - quotes.qd
    - boxes.qd
    - math.qd
    - footnotes.qd
    - mermaid.qd
    - collapsibles.qd
    - errors.qd
    - keybindings.qd
    - filetrees.qd
    - icons.qd
    - separators.qd
    - alignment.qd
    - stacks.qd
    - crossreferences.qd
    - bibliography.qd
    - localization.qd
```

You can also combine the function with [`.listfiles`](listing-files.qd) to automatically include all files in a directory:

```markdown
.includeall {.listfiles {somedirectory} sortby:{name}}
```

## Context sharing

The `.include` function’s `sandbox` parameter lets you control how much isolation the included file has from the main file. The included file always inherits the context of the main file, but you can optionally allow changes in the included file to propagate back.

For these examples, consider the following files:

> `file.qd`
> 
> ```markdown
> .docname {New name}
> 
> .function {greet}
>   name:
>   Hello, **.name**!
> ```

> `main.qd`
> 
> ```markdown
> .docname {My document}
> .include {file.qd} sandbox:{<value>}
> 
> 1. .docname
> 2. .greet {John}
> ```

Here are the available options, in ascending order of isolation:

### `share` (default)

Both contexts are synchronized bidirectionally. Any customization, function, variable, and other information declared in the included file will also be available in the main file, and vice versa.

> Output:
> 
> 1. New name
> 2. Hello, **John**!

### `scope`

Similar to `share`, but function and variable declarations do not propagate back to the main file.

This is the same behavior used in nested lambda scopes, such as in [`.function`](declaring-functions.qd) and [`.foreach`](loops.qd).

> Output:
> 
> 1. New name
> 2. Compile error: `.greet` is not defined.

### `subdocument`

The included file is completely isolated from the main file. Any changes, including metadata and layout options, do not propagate back.

This is the same behavior as [subdocuments](subdocuments.qd).

> Output:
> 
> 1. My document
> 2. Compile error: `.greet` is not defined.

## Use case: setting up

A common use case is putting all setup function calls in a separate file. See the *Document setup* section of this wiki for all available options.

> `setup.qd`
> 
> ```markdown
> .docname {My document}
> .docauthor {iamgio}
> .doctype {slides}
> .doclang {English}
> .theme {darko} layout:{minimal}
> 
> .footer
>    ...
> ```

> `main.qd`
> 
> ```markdown
> .include {setup.qd}
> 
> # My cool document
> 
> ...
> ```