> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Clip

The **`.clip {shape}`** block function clips its content to a defined shape.

Supported shapes:

- `circle`

> **Example 1**
> 
> ```markdown
> ![Sky](assets/sky.jpg)
> 
> .clip {circle}
>     ![Sky](assets/sky.jpg)
> ```
> 
> ![Sky](media/sky@-233435969.jpg)
> 
> ![Sky](media/sky@-233435969.jpg)

## Figures

When clipping a [figure](figure.md), only the content is affected, leaving the caption intact:

> **Example 2**
> 
> ```markdown
> ![Sky](assets/sky.jpg "A blue sky.")
> 
> .clip {circle}
>     ![Sky](assets/sky.jpg "A blue sky.")
> ```
> 
> ![Sky](media/sky@-233435969.jpg "A blue sky.")
> A blue sky.
> 
> ![Sky](media/sky@-233435969.jpg "A blue sky.")
> A blue sky.

## General content

Clipping works with any content, not just images. Here a [container](container.md) is used:

> **Example 3**
> 
> ```markdown
> .clip {circle}
>     .container padding:{2cm} background:{teal}
>         #! Hello!
> ```
> 
> # Hello!