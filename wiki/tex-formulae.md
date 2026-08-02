> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# TeX formulae

Quarkdown natively supports TeX math equations and formulae. When rendering to HTML, this feature is powered by [KaTeX](https://www.katex.org).

## Inline

Inline equations can be created by wrapping text between two `$` symbols. Both delimiters must be preceded and followed by a whitespace (or beginning/end of the line).

> **Example 1**
> 
> ```markdown
> Let $ \overline v = \frac {\Delta x} {\Delta t} $ be the **average velocity** of an object.
> ```
> 
> Let $\overline v = \frac {\Delta x} {\Delta t}$ be the **average velocity** of an object.

## One-line block

Block equations are usually visually centered and share the same syntax as inline ones, but need to be isolated from other content:

> **Example 2**
> 
> ```markdown
> The following function is a **Fourier Transform**:
> 
> $ F(u) = \int^{+\infty}_{-\infty} f(x) e^{-i 2\pi x} dx $
> ```
> 
> The following function is a **Fourier Transform**:
> 
> $$F(u) = \int^{+\infty}_{-\infty} f(x) e^{-i 2\pi x} dx$$

> This syntax does **not** interrupt paragraphs, so make sure to space blocks properly. If the paragraph is not interrupted, the formula is recognized as inline due to Markdown’s *lazy lines*.
> 
> > **Example 3**
> > 
> > ```markdown
> > The following function is a **Fourier Transform**:
> > $ F(u) = \int^{+\infty}_{-\infty} f(x) e^{-i 2\pi x} dx $
> > ```
> > 
> > The following function is a **Fourier Transform**:
> > $F(u) = \int^{+\infty}_{-\infty} f(x) e^{-i 2\pi x} dx$

## Multiline block

A block formula can span over multiple lines thanks to a syntax similar to fenced code blocks, using three `$` symbols as delimiters.

> **Example 4**
> 
> ```markdown
> $$$
> f(x) =
> \begin{cases}
>     0 & \text{if } x = 0 \\
>     1 & \text{if } x \neq 0
> \end{cases}
> $$$
> ```
> 
> $$f(x) =
> \begin{cases}
>     0 & \text{if } x = 0 \\
>     1 & \text{if } x \neq 0
> \end{cases}$$

## The `.math` function

Equations can also be created via the **`.math`** [primitive function](primitives.md). This is useful when the equation content is computed from other functions, or when you want to apply styling to a specific formula.

> **Example 5**
> 
> ```markdown
> .math
>     E = mc^2
> 
> <!-- or, equivalently -->
> 
> .math {E = mc^2}
> ```
> 
> $$E = mc^2$$
> 
> $$E = mc^2$$

By default, `.math` produces a block formula when produced by a [block function call](syntax-of-a-function-call.md#block-vs-inline-function-calls). You can force one or the other via the `block` parameter:

> **Example 6**
> 
> ```markdown
> Inline: .math {2 + 2}
> ```
> 
> Inline: $2 + 2$

The content is evaluated as Quarkdown, so nested function calls are evaluated, contrary to the `$`-based syntax.

> **Example 7**
> 
> ```markdown
> .var {n} {5}
> 
> .math
>     f(.n) = .n::multiply {2}
> ```
> 
> $$f(5) = 10$$

### Styling

Both inline and block equations accept the same [styling properties](element-styling-properties.md) as containers.

> **Example 8**
> 
> ```markdown
> .math fontsize:{larger}
>     \pi \approx 3.14
> ```
> 
> $$\pi \approx 3.14$$

### Extending

`.math` backs the standard `$ ... $` syntax, so [extending it](element-styling.md) affects every equation in the document at once.

> **Example 9**
> 
> ```markdown
> .extend {math}
>     .super foreground:{skyblue}
> 
> .extend {math} where:{block: .block}
>     .super fontsize:{larger}
> 
> $ a^2 + b^2 = c^2 $
> 
> Inline: $ a^2 + b^2 = c^2 $
> ```
> 
> $$a^2 + b^2 = c^2$$
> 
> Inline: $a^2 + b^2 = c^2$

## Macros

Quarkdown supports the creation of TeX macros via the `.texmacro` function. See [*TeX macros*](tex-macros.md) for more information.