> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Importing external libraries

The **`.include`** function, previously seen in [*Including other Quarkdown files*](including-other-quarkdown-files.md), can also import external **libraries**.

When you download Quarkdown or build it via `distZip`, the `lib/qd` directory contains utility libraries written in Quarkdown itself.

- quarkdown/

  - lib/

    - qd/

      - lib.qd
      - ...
  - bin/

    - quarkdown.jar

You can import `.qd` files into a Quarkdown project via `.include {name}`, without the file extension.

For example, to import `paper.qd`, use `.include {paper}`.

> Unlike `.include {path}`, this approach only loads declared symbols without appending Markdown content from the file.

> The default library directory is `<install directory>/lib/qd`. You can override this via the command-line option `-l` or `--libs`.