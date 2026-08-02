> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Float

The **`.float {alignment}`** function transforms any content into a floating element that breaks the normal flow and allows subsequent content to wrap around it.

The `alignment` parameter accepts `start` or `end`.

> **Example 1**
> 
> ```markdown
> .float {start}
>     !(70%)[Icon](assets/icon.svg)
> 
> .loremipsum
> ```
> 
> <img src="media/icon@-1965017468.svg" alt="Icon" width="70.0%" />
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut erat nec suscipit. Mauris vitae massa eu leo molestie ullamcorper. Fusce ornare neque quis faucibus laoreet. Pellentesque mauris sapien, pretium sed leo vitae, aliquam suscipit dolor. Aenean egestas congue rutrum. Nunc eget eros eu justo fringilla lobortis efficitur non est. In ultrices lectus ac iaculis cursus. Phasellus at luctus nibh, non porttitor ex. Vestibulum ligula metus, dignissim ac nisi non, tristique hendrerit purus.

In addition to images, you can make any other content float.

> **Example 2**
> 
> ```markdown
> .float {end}
>     .box {Hello} type:{warning}
>         Floating!
> 
> .loremipsum
> ```
> 
> > **Hello**
> > 
> > Floating!
> 
> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ut erat nec suscipit. Mauris vitae massa eu leo molestie ullamcorper. Fusce ornare neque quis faucibus laoreet. Pellentesque mauris sapien, pretium sed leo vitae, aliquam suscipit dolor. Aenean egestas congue rutrum. Nunc eget eros eu justo fringilla lobortis efficitur non est. In ultrices lectus ac iaculis cursus. Phasellus at luctus nibh, non porttitor ex. Vestibulum ligula metus, dignissim ac nisi non, tristique hendrerit purus.