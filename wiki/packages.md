> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Packages

A **package**, called an *atom*, is a published, reusable bundle of Quarkdown sources and assets.

You can find the official catalog on [`Quarkdown Atoms`](https://studio.quarkdown.com/atoms).

## Using a package

Reference a package from `.include` with the `@scope/name:version` syntax.

> **Example 1**
> 
> ```markdown
> .include {@atoms/cowsay:1.0.0}
> 
> .cowsay {Hello, Quarkdown!}
> ```
> 
> Hello, Quarkdown!
> 
> 🐄

- `@scope` refers to the repository or namespace identifier. `@atoms` is currently the only supported one.
- `cowsay` is the package name.
- `1.0.0` is the package version. Note that versions in the `@atoms` scope are immutable.

The first time a document references a package, Quarkdown downloads it into your project:

- my-project/

  - @atoms/

    - cowsay/

      - atom.toml
      - main.qd
      - ...
- main.qd

Installing packages is covered by the `package-install` [permission](cli-compiler.md#permissions), which is granted by default.

### Version control

Whether to gitignore the `@atoms` directory or not is not enforced. Keep it tracked for offline builds, or ignore it for full reproducibility.

## Publishing a package

See [*Publishing packages*](publishing-packages.md) to set up your own package, and follow the instructions on [`quarkdown-labs/atoms`](https://github.com/quarkdown-labs/atoms) to publish it to the official repository.