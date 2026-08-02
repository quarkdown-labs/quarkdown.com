> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Environment

Quarkdown can read environment variables from the host system at compile time, allowing documents to adapt their content based on the environment they are compiled in.

## Reading an environment variable

**`.env {name}`**  returns the value of the environment variable with the given name, or `none` if it is not set.

> **Example 1**
> 
> ```markdown
> This page was compiled with .env {SHELL} as the default shell.
> ```
> 
> This page was compiled with /bin/bash as the default shell.

> **Example 2**
> 
> Since the result may be `none`, you can use [optionality functions](none.md) to handle missing values:
> 
> ```markdown
> .container background:{.env {COLOR}::otherwise {teal}}
>     Hello, world!
> ```
> 
> Hello, world!

## Permissions

Reading environment variables requires the `process` [permission](cli-compiler.md#permissions).

```shell
quarkdown c main.qd --allow process
```