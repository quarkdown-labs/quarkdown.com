> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Box

The **`.box`**  function creates a special box container with an inline *title* and block *content*.

> **Example 1**
> 
> ```markdown
> .box {Box title}
>     Welcome to the **Quarkdown wiki**!
>     Here you'll learn how to get started with your first document.
> ```
> 
> > **Box title**
> > 
> > Welcome to the **Quarkdown wiki**!
> > Here you’ll learn how to get started with your first document.

You can omit the title:

> **Example 2**
> 
> ```markdown
> .box
>     Welcome to the **Quarkdown wiki**!
>     Here you'll learn how to get started with your first document.
> ```
> 
> > Welcome to the **Quarkdown wiki**!
> > Here you’ll learn how to get started with your first document.

## Box types

A box can have a type, which defaults to `callout` if not specified. The available types are:

- `callout`
- `tip`
- `note`
- `warning`
- `error`

> **Example 3**
> 
> ```markdown
> .box {Box title} type:{tip}
>     This is a tip box!
> 
> .box {Box title} type:{note}
>     This is a note box!
> 
> .box {Box title} type:{warning}
>     This is a warning box!
> ```
> 
> > **Box title**
> > 
> > This is a tip box!
> 
> > **Box title**
> > 
> > This is a note box!
> 
> > **Box title**
> > 
> > This is a warning box!

## Automatic localization

If you omit the title, set [`.doclang`](document-metadata.qd), and the locale is supported, the box title is automatically [localized](localization.qd).

> **Example 4**
> 
> ```markdown
> .box type:{tip}
>     This is a tip box!
> 
> .box type:{note}
>     This is a note box!
> 
> .box type:{warning}
>     This is a warning box!
> ```
> 
> > **Tip**
> > 
> > This is a tip box!
> 
> > **Note**
> > 
> > This is a note box!
> 
> > **Warning**
> > 
> > This is a warning box!

> Boxes and [typed quotes](quote-types.qd) are two different ways to create typed alerts.