> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Dictionary

In Quarkdown, a dictionary is a collection of key-value pairs without duplicate keys. Keys are always strings, while values can be any type.

The dictionary syntax resembles YAML and uses Markdown lists:

```yaml
- key1: value1
- key2: value2
- key3: value3
```

Since this syntax overlaps with [Iterable](iterable.md) syntax, you can wrap the dictionary declaration in a **`.dictionary`** function to remove ambiguity when both types are accepted.

> **Example 1**
> 
> [`.foreach`](loops.md) accepts both iterables and dictionaries, so we explicitly create a dictionary to iterate over key-value pairs, and [destructure](destructuring.md) them into separate variables.
> 
> ```markdown
> .var {mydictionary}
>     .dictionary
>         - key1: value1
>         - key2: value2
>         - key3: value3
> 
> .foreach {.mydictionary}
>     key value:
>     **.key**: .value
> ```
> 
> **key1**: value1
> 
> **key2**: value2
> 
> **key3**: value3

You can nest dictionaries when the function supports it, such as [`.localization`](localization.md#creating-your-own-localized-strings):

```yaml
- English:
  - greeting: Hello
  - food: Fish and chips
- Italian:
  - greeting: Ciao
  - food: Pasta
```

Trailing colons before nested dictionaries are optional:

```yaml
- English
  - greeting: Hello
  - food: Fish and chips
- Italian
  - greeting: Ciao
  - food: Pasta
```

## Operations

You can pass a dictionary to any function that accepts an [iterable](iterable.md#operations), where it is treated as an iterable of pairs.

For a complete list of dictionary operations, see the [Dictionary documentation](https://quarkdown.com/docs/quarkdown-stdlib/com.quarkdown.stdlib.module.Dictionary) in the standard library.