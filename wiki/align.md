> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Align

The **`.align`** block function sets the horizontal alignment of content, including multiline text alignment.

The primary parameter accepts the alignment type: `start`, `center`, or `end`. For convenience, **`.center`** is a shorthand for `.align {center}`.

> **Example 1**
> 
> ```markdown
> .align {end}
>     #! My document
> 
> .loremipsum
> ```
> 
> # My document
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut erat nec suscipit. Mauris vitae massa eu leo molestie ullamcorper. Fusce ornare neque quis faucibus laoreet. Pellentesque mauris sapien, pretium sed leo vitae, aliquam suscipit dolor. Aenean egestas congue rutrum. Nunc eget eros eu justo fringilla lobortis efficitur non est. In ultrices lectus ac iaculis cursus. Phasellus at luctus nibh, non porttitor ex. Vestibulum ligula metus, dignissim ac nisi non, tristique hendrerit purus.

> **Example 2**
> 
> ```markdown
> .center
>     #! My document
> 
> .loremipsum
> ```
> 
> # My document
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut erat nec suscipit. Mauris vitae massa eu leo molestie ullamcorper. Fusce ornare neque quis faucibus laoreet. Pellentesque mauris sapien, pretium sed leo vitae, aliquam suscipit dolor. Aenean egestas congue rutrum. Nunc eget eros eu justo fringilla lobortis efficitur non est. In ultrices lectus ac iaculis cursus. Phasellus at luctus nibh, non porttitor ex. Vestibulum ligula metus, dignissim ac nisi non, tristique hendrerit purus.