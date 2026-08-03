> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Element styling

If you’ve used Typst, you may be familiar with the `#show` directive for styling elements.   

Quarkdown provides a similar, powerful mechanism that involves [function extensions](extending-functions.md), allowing you to customize not only their appearance, but also their behavior and content.

Several Markdown elements are associated to a special function called *primitive*. For example, headings (`#`, `##`, etc.) are backed by the `.heading` primitive function.
Extending a primitive allows you to intercept and alter the call itself through `.super`, which invokes the original function with optional overrides.

> For a full list of supported primitives, see the [*Primitives*](https://quarkdown.com/docs/quarkdown-stdlib/com.quarkdown.stdlib.module.Primitives/index.html) module.

> **Example 1**
> 
> ```markdown
> .extend {heading}
>     .super background:{red}
> 
> ## This is red
> ```
> 
> ## This is red

> For a list of styling properties supported by most primitives, see [*Styling properties*](element-styling-properties.md).

## Conditional styling

The `where` parameter allows you to apply styling conditionally based on the arguments of the original function call.

> **Example 2**
> 
> ```markdown
> .extend {heading} where:{depth: .depth::equals {2}}
>     .super background:{red}
> 
> ## This is red (depth 2)
> 
> ### This is not red (depth 3)
> ```
> 
> ## This is red
> 
> ### This is not red

Any argument of the intercepted call can be used in the condition, for example [cross-reference identifiers](cross-references.md) via `ref`:

> **Example 3**
> 
> ```markdown
> .extend {math} where:{ref: .ref::startswith {einstein}}
>     .super foreground:{skyblue} fontsize:{larger}
> 
> $ E=mc^2 $ {#einstein-relativity}
> 
> $ F=ma $
> ```
> 
> $$E=mc^2$$
> 
> $$F=ma$$

## Content changes

Intercepted parameters can also be modified on the go. A common use case would be transforming the Markdown content of an element.

> **Example 4**
> 
> Here we add an [icon](icons.md) to all external links. Note that [body arguments](syntax-of-a-function-call.md#the-body-argument) work with `.super` normally.
> 
> ```markdown
> .extend {link} where:{url: .url::startswith {https://quarkdown.com}::not}
>     content:
>     .super
>         .content .icon {box-arrow-up-right}
> 
> Check out the [docs](https://quarkdown.com/docs)
> and the [repo](https://github.com/iamgio/quarkdown)
> ```
> 
> Check out the [docs](https://quarkdown.com/docs) and the [repo ](https://github.com/iamgio/quarkdown)

## Pattern matching

Quarkdown supports transforming arbitrary content according to RegEx patterns via the **`.match {content} {pattern} {replacement}`**  function, which replaces all occurrences of `pattern` within `content` with `replacement`.

> **Example 5**
> 
> ```markdown
> .extend {paragraph}
>     content:
>     .super
>         .content::match {[Qq]uark(down|s)?}
>             ***.1***
> 
> Quarkdown takes its name from quarks
> ```
> 
> ***Quarkdown*** takes its name from ***quarks***