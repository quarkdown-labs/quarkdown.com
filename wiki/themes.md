> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Themes

A theme defines the look and feel of your Quarkdown document. More themes are planned for the future.

Themes are split into two groups: *color* themes, which define the color scheme of a document, and *layout* themes, which set the general structural rules of the layout. Combining them allows you to create a document that truly stands out.

You can set a theme via the **`.theme {colortheme} layout:{layouttheme}`** function.

### Color themes

- paperwhite
- darko
- galactic
- beaver

### Layout themes

- latex
- hyperlegible
- minimal
- focus
- beamer

## Combinations

Some suggested combinations are:

- paperwhite + latex: LaTeX look, great for paged documents;
- galactic + hyperlegible: this wiki;
- paperwhite + focus: simple, clean look for slides and articles;
- darko + minimal;
- beaver + beamer: Beamer look, great for academic-style presentations.

The following table shows how each combination renders the same page of the [Mock document](https://github.com/iamgio/quarkdown/tree/main/mock#readme) (note: it’s scrollable!).
Click a preview to open the full PDF.

|  | latex | hyperlegible | minimal | focus | beamer |
| --- | --- | --- | --- | --- | --- |
| **paperwhite** | [![paperwhite, latex](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/paperwhite_latex.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/paperwhite_latex.pdf)  | [![paperwhite, hyperlegible](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/paperwhite_hyperlegible.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/paperwhite_hyperlegible.pdf)  | [![paperwhite, minimal](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/paperwhite_minimal.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/paperwhite_minimal.pdf)  | [![paperwhite, focus](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/paperwhite_focus.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/paperwhite_focus.pdf)  | [![paperwhite, beamer](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/paperwhite_beamer.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/paperwhite_beamer.pdf)  |
| **darko** | [![darko, latex](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/darko_latex.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/darko_latex.pdf)  | [![darko, hyperlegible](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/darko_hyperlegible.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/darko_hyperlegible.pdf)  | [![darko, minimal](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/darko_minimal.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/darko_minimal.pdf)  | [![darko, focus](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/darko_focus.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/darko_focus.pdf)  | [![darko, beamer](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/darko_beamer.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/darko_beamer.pdf)  |
| **galactic** | [![galactic, latex](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/galactic_latex.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/galactic_latex.pdf)  | [![galactic, hyperlegible](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/galactic_hyperlegible.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/galactic_hyperlegible.pdf)  | [![galactic, minimal](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/galactic_minimal.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/galactic_minimal.pdf)  | [![galactic, focus](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/galactic_focus.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/galactic_focus.pdf)  | [![galactic, beamer](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/galactic_beamer.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/galactic_beamer.pdf)  |
| **beaver** | [![beaver, latex](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/beaver_latex.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/beaver_latex.pdf)  | [![beaver, hyperlegible](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/beaver_hyperlegible.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/beaver_hyperlegible.pdf)  | [![beaver, minimal](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/beaver_minimal.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/beaver_minimal.pdf)  | [![beaver, focus](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/beaver_focus.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/beaver_focus.pdf)  | [![beaver, beamer](https://raw.githubusercontent.com/quarkdown-labs/generated/main/mock-jpg/beaver_beamer.jpg) ](https://github.com/quarkdown-labs/generated/blob/main/mock/beaver_beamer.pdf)  |

## Contributing

[Theme contributions](https://github.com/iamgio/quarkdown/tree/main/quarkdown-html/src/main/scss) are welcome.

Please make sure themes work well with all four document types before submitting. The [Mock document](https://github.com/iamgio/quarkdown/tree/main/mock#readme) is a great way to test themes against a variety of different elements.