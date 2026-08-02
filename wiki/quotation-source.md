# Quotation source

Quarkdown allows a blockquote to have a citation source.

In general, if the quote ends with a single-item unordered list, that list item is set as the citation source. You can specify the source using any of the supported unordered list bullets: `-`, `*`, `+`, although using `-` is recommended.

> **Example 1**
> 
> ```markdown
> > To be, or not to be, that is the question.
> > - William Shakespeare
> ```
> 
> > To be, or not to be, that is the question.
> > 
> > -- William Shakespeare

The layout and aesthetics are handled by the current layout theme.

The source may contain inline content, including function calls.

> **Example 2**
> 
> ```markdown
> > Failure's not an option. It's just a step.
> > - Dwayne **The Rock** Johnson
> ```
> 
> > Failure’s not an option. It’s just a step.
> > 
> > -- Dwayne **The Rock** Johnson

> **Example 3**
> 
> ```markdown
> >> You miss 100% of the shots you don't take.
> >> - Wayne Gretzky
> > - Michael Scott
> ```
> 
> > > You miss 100% of the shots you don’t take.
> > > 
> > > -- Wayne Gretzky
> > 
> > -- Michael Scott

## Typed quotes

[Typed quotes](quote-types.qd) may also have sources:

> **Example 4**
> 
> ```markdown
> > Tip: Try out **Quarkdown**!
> > - [Gio](https://github.com/iamgio)
> ```
> 
> > Try out **Quarkdown**!
> > 
> > -- [Gio](https://github.com/iamgio)