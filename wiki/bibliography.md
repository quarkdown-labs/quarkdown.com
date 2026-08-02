> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Bibliography

Quarkdown provides CSL-powered bibliography support for the following bibliography formats:

- [BibTeX](https://www.bibtex.org) (`.bib`)
- CSL JSON (`.json`)
- YAML (`.yaml`/`.yml`)
- EndNote (`.enl`)
- RIS (`.ris`)

To get started, call the **`.bibliography {file}`**  function, where `file` is the path to your bibliography file, with extension. You can find some BibTeX examples [here](https://www.bibtex.com/e/entry-types/).

> **Example 1**
> 
> ```markdown
> .bibliography {bibliography/file.bib}
> ```
> 
> # References
> 
> [1] A. Einstein, “Zur Elektrodynamik bewegter Körper. (German) \[On the electrodynamics of moving bodies],” *Annalen der Physik*, vol. 322, Art. no. 10, 1905, doi: [http://dx.doi.org/10.1002/andp.19053221004](http://dx.doi.org/10.1002/andp.19053221004).
> [2] S. Hawking, *A Brief History of Time*. Bantam Books, 1988.
> [3] M. Goossens, F. Mittelbach, and A. Samarin, *The LaTeX Companion*. Reading, Massachusetts: Addison-Wesley, 1993.

## Citations

You can cite one or more entries from the bibliography using the **`.cite {key}`** function.

Consider the following BibTeX entries:

```text
@article{einstein,
  author = "Albert Einstein",
  ...
}

@book{hawking,
  author = "Stephen Hawking",
  ...
}
```

You can cite them using their keys. Multiple keys can be specified as a comma-separated list
to produce a single combined citation label, whose format depends on the active [citation style](#style).

> **Example 2**
> 
> ```markdown
> Einstein's publication .cite {einstein} in 1905 revolutionized the field of physics.
> Similarly, Hawking's book .cite {hawking} has had a profound impact
> on our understanding of cosmology and black holes.
> 
> These works .cite {einstein, hawking} are foundational to modern physics.
> ```
> 
> Einstein’s publication [1] in 1905 revolutionized the field of physics.
> Similarly, Hawking’s book [2] has had a profound impact
> on our understanding of cosmology and black holes.
> 
> These works [1], [2] are foundational to modern physics.

## Style

The optional `style` parameter configures the look and format of the bibliography and its citation references.
It accepts a [CSL](https://citationstyles.org) (Citation Style Language) style identifier.
Quarkdown ships with a selection of citation styles from the [CSL Style Repository](https://github.com/citation-style-language/styles),
including `ieee` (default), `apa`, `chicago-author-date`, `nature`, `modern-language-association`, and many more.

```markdown
.bibliography {bibliography.bib} style:{apa}
```

```text
american-anthropological-association
american-chemical-society
american-geophysical-union
american-institute-of-aeronautics-and-astronautics
american-institute-of-physics
american-medical-association
american-meteorological-society
american-physics-society
american-physiological-society
american-political-science-association
american-society-for-microbiology
american-society-of-civil-engineers
american-society-of-mechanical-engineers
american-sociological-association
angewandte-chemie
annual-reviews
annual-reviews-author-date
apa
associacao-brasileira-de-normas-tecnicas
association-for-computing-machinery
biomed-central
bmj
bristol-university-press
cell
chicago-author-date
chicago-notes-bibliography
chicago-notes
chicago-shortened-notes-bibliography
copernicus-publications
current-opinion
deutsche-gesellschaft-fur-psychologie
deutsche-sprache
elsevier-harvard
elsevier-vancouver
elsevier-with-titles
frontiers
future-medicine
future-science-group
gost-r-7-0-5-2008-numeric
harvard-cite-them-right
ieee
institute-of-physics-numeric
karger-journals
mary-ann-liebert-vancouver
modern-language-association
multidisciplinary-digital-publishing-institute
nature
pensoft-journals
plos
royal-society-of-chemistry
sage-vancouver
sist02
spie-journals
springer-basic-author-date
springer-basic-brackets
springer-fachzeitschriften-medizin-psychologie
springer-humanities-author-date
springer-lecture-notes-in-computer-science
springer-mathphys-brackets
springer-socpsych-author-date
springer-vancouver
taylor-and-francis-chicago-author-date
taylor-and-francis-national-library-of-medicine
the-institution-of-engineering-and-technology
the-lancet
thieme-german
trends-journals
```

## Title

By default, the title is [localized](localization.md) to the current locale set via `.doclang`, if supported. You can set a custom title using the `title` parameter.

> **Example 3**
> 
> ```markdown
> .bibliography {bibliography/file.bib} title:{My bibliography}
> ```
> 
> # My bibliography
> 
> [1] A. Einstein, “Zur Elektrodynamik bewegter Körper. (German) \[On the electrodynamics of moving bodies],” *Annalen der Physik*, vol. 322, Art. no. 10, 1905, doi: [http://dx.doi.org/10.1002/andp.19053221004](http://dx.doi.org/10.1002/andp.19053221004).
> [2] S. Hawking, *A Brief History of Time*. Bantam Books, 1988.
> [3] M. Goossens, F. Mittelbach, and A. Samarin, *The LaTeX Companion*. Reading, Massachusetts: Addison-Wesley, 1993.

### Heading options

The heading that precedes the bibliography can be further customized with the following parameters:

| Parameter | Description | Accepts | Default |
| --- | --- | --- | --- |
| `headingdepth` | Depth of the heading that precedes the bibliography. | Integer | `1` |
| `breakpage` | Whether the heading triggers an automatic [page break](page-break.md#automatic-break). | Boolean | `yes` |
| `numberheading` | Whether the heading should be [numbered](numbering.md) and have its position tracked in the document hierarchy. | Boolean | `no` |
| `indexheading` | Whether the heading should be included in the document’s [table of contents](table-of-contents.md). Implicitly enables `numberheading`. | Boolean | `no` |

For example, depending on the current [auto page break](page-break.md#automatic-break) configuration, the title may cause a page break. You can prevent this:

```markdown
.bibliography {file.bib} title:{My bibliography} breakpage:{no}
```