> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Table caption

The Quarkdown flavor introduces table captions, which you can set by adding a line immediately below the table. The content is wrapped between double quotes, single quotes, or parentheses, exactly like the image *title* attribute and [code captions](code-caption.qd).

> **Example 1**
> 
> ```markdown
> | Country | Capital |
> |---------|---------|
> | England | London  |
> | Italy   | Rome    |
> | France  | Paris   |
> "Capitals of Europe"
> ```
> 
> | Country | Capital |
> | --- | --- |
> | England | London |
> | Italy | Rome |
> | France | Paris |
> 
> Capitals of Europe

> **Example 2**
> 
> The caption must be located immediately next to the table, on a new line. The following example renders a paragraph instead of a caption:
> 
> ```markdown
> | Country | Capital |
> |---------|---------|
> | England | London  |
> | Italy   | Rome    |
> | France  | Paris   |
> 
> "Capitals of Europe"
> ```
> 
> | Country | Capital |
> | --- | --- |
> | England | London |
> | Italy | Rome |
> | France | Paris |
> 
> “Capitals of Europe”

## Changing position

The relative position of captions can be customized. See [Caption position](caption-position.qd) for further information.

## Numbering

Tables can also be **numbered**. See [Numbering](numbering.qd) for further information.