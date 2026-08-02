# TeX macros

When writing [TeX formulae](tex-formulae.qd), you may want to use custom macros.

The **`.texmacro {name} {content}`**  function defines a new macro that can be used in equations.

> **Example 1**
> 
> ```markdown
> .texmacro {\gradient} {\nabla}
> 
> $ \gradient f $
> ```
> 
> $$\gradient f$$

As with every Quarkdown function, you can use the last argument as a [*block argument*](syntax-of-a-function-call.qd).

> **Example 2**
> 
> ```text
> .texmacro {\gradient}
>     \nabla
> ```

## Parameters

Macros can feature a variable number of parameters, which are referenced inside the macro content as `#1`, `#2`, and so on.

> **Example 3**
> 
> ```markdown
> .texmacro {\sumlim}
>     \sum_{#1}^{#2}
> 
> $ \sumlim{i=1}{n} a_i $
> ```
> 
> $$\sumlim{i=1}{n} a_i$$

## Composing

You can define multiple macros and combine them, as you would do in LaTeX:

> **Example 4**
> 
> ```markdown
> .texmacro {\hello}
>     \text {Hello, \textit {world}}
> 
> .texmacro {\highlight}
>     \colorbox{blue}{#1}
> 
> $ \highlight{\hello} $
> ```
> 
> $$\highlight{\hello}$$

You can also compose them on top of other macros:

> **Example 5**
> 
> ```markdown
> .texmacro {\hello}
>     \text {Hello, \textit {world}}
> 
> .texmacro {\highlighthello}
>     \colorbox{blue}{\hello}
> 
> $ \highlighthello $
> ```
> 
> $$\highlighthello$$