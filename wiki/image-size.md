> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Image size

While base Markdown requires HTML code to constrain the size of an image, Quarkdown introduces a syntax extension that achieves the same result more elegantly: `!(WIDTHxHEIGHT)[ALT](URL)`.

> **Example 1**
> 
> The following equivalent examples load `image.png` with the label `Alt` as CommonMark Markdown does, but also add a size constraint that fits the visible image into a 300px by 100px box.
> 
> ```markdown
> !(300x100)[Alt](image.png)
> 
> <!-- or -->
> 
> !(300*100)[Alt](image.png)
> 
> <!-- or -->
> 
> !(300 100)[Alt](image.png)
> ```
> 
> <img src="media/sky@-233435969.jpg" alt="Icon" width="300.0px" height="100.0px" />

In addition to pixels (whose unit can be omitted), any other [size](sizes.md) unit is supported. When using other units, you must use either `*` or a space as the delimiter instead of `x`.

```markdown
!(5cm*35mm)[Alt](image.png)

<!-- or -->

!(2.5in 1cm)[Alt](image.png)

<!-- but not this -->

!(2.5inx1cm)[Alt](image.png)

<!-- '%' is an exception. This is valid (although not very readable) -->

!(30%x150%)[Alt](image.png)
```

## Automatic dimension

When you set either component (width or height) to `_` (underscore), it becomes automatic, meaning that component is calculated to preserve the original aspect ratio.

### Auto height

```markdown
<!-- 300px width, auto height -->
!(300x_)[Alt](image.png)

<!-- 5cm width, auto height -->
!(5cm*_)[Alt](image.png)

<!-- 2in width, auto height -->
!(2in _)[Alt](image.png)

<!-- 50% width, auto height -->
!(50% _)[Alt](image.png)
```

As a convenient shorthand, you can omit the automatic height entirely:

```markdown
<!-- 300px width, auto height -->
!(300)[Alt](image.png)

<!-- 5cm width, auto height -->
!(5cm)[Alt](image.png)

<!-- 2in width, auto height -->
!(2in)[Alt](image.png)

<!-- 50% width, auto height -->
!(50%)[Alt](image.png)
```

### Auto width

```html
<!-- auto width, 100px height -->
!(_x100)[Alt](image.png)

<!-- auto width, 15mm height -->
!(_*15mm)[Alt](image.png)

<!-- auto width, 2in height -->
!(_ 2in)[Alt](image.png)
```