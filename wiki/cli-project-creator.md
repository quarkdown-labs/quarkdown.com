> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# CLI - Project creator

The **project creator** is a CLI project wizard that makes it fast to set up a new Quarkdown project.

**`quarkdown create [directory]`** launches the wizard and generates the project files in the given directory (it will
be created if it does not exist). Not specifying a value for `directory` generates the files in the working directory.

The following information will be prompted via standard input, unless the corresponding option is set via command-line
arguments:

| Data | Additional info | Corresponding option | Generated Quarkdown function |
| --- | --- | --- | --- |
| Project name |  | `--name` | [`.docname`](document-metadata.md) |
| Authors | Separated by commas | `--authors` | [`.docauthors`](document-metadata.md#authors) |
| Document type | `paged`/`slides`/`plain` | `--type` | [`.doctype`](document-metadata.md) |
| Document language | [Valid language tag or full name](localization.md) | `--lang` | [`.doclang`](document-metadata.md) |
| Color theme (unprompted) |  | `--color-theme` | [`.theme`](themes.md) |
| Layout theme (unprompted) |  | `--layout-theme` | [`.theme`](themes.md) |

Additional options:

- `--empty`: does not include sample initial content
- `--main-file <name>`: sets the name of the main `.qd` source file. Defaults to the name of the parent directory.