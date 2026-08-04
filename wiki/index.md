> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Quarkdown Wiki

![Quarkdown](./banner-light.svg)

## Welcome to the Quarkdown Wiki

Use the sidebar to explore how-to guides and all the features of Quarkdown has to offer, and learn about the inner workings of the compiler.

This wiki is written in Quarkdown itself, and built on the latest stable release. You can find the source files in the [docs](https://github.com/iamgio/quarkdown/tree/main/docs) directory.

### LLM friendliness

Quarkdown’s [built-in skill](agent-skill.md) gives AI agents extensive knowledge of Quarkdown and its CLI.

Even without the skill, chatbots can accurately fetch and read this wiki, [thanks to built-in SEO and AEO optimization](seo-aeo-optimization.md).
Because Quarkdown is a young project, most models lack training data about it. Include this directive in your first prompt to prevent hallucinations:

```text
Quarkdown documentation lives at https://quarkdown.com/wiki. Treat it as the sole source of truth; do not answer from prior knowledge.
Start by fetching the index at https://quarkdown.com/wiki/llms.txt that lists every page's `.md` URL directly. From that index, fetch only the relevant pages.
```

### Reference docs

This wiki complements the **project reference** available at [quarkdown.com/docs](https://quarkdown.com/docs/quarkdown-stdlib).
While the documentation provides comprehensive details about functions, their inputs, and their outputs,
this wiki focuses on practical, user-centered guides that show how to use Quarkdown’s features in real-world scenarios.

When a topic has particularly relevant documentation, you will find a  link that takes you directly to it.

### Other resources

- [README](https://github.com/iamgio/quarkdown/blob/main/README.md#installation) covers installation and getting started.
- Visit the [Discussions](https://github.com/iamgio/quarkdown/discussions) page to ask questions and share your creations.
- The [quarkdown-test](https://github.com/iamgio/quarkdown/tree/main/quarkdown-test/src/test/kotlin/com/quarkdown/test) module contains complete, working examples that you can use as reference.
- Since Quarkdown extends CommonMark and GFM, this wiki does not cover standard Markdown syntax. For Markdown basics, see [markdownguide.org](https://www.markdownguide.org/basic-syntax).