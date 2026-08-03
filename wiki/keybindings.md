> For the complete documentation index, see [llms.txt](https://quarkdown.com/wiki/llms.txt).

# Keybindings

The **`.keybinding {keys}`**  function displays a keyboard shortcut or key combination.

> **Example 1**
> 
> ```markdown
> Press .keybinding {Mod+K} to trigger the action.
> ```
> 
> Press <kbd>Ctrl/⌘</kbd>+<kbd>K</kbd> to trigger the action.

Keys are separated by `+`, `,`, or `-` delimiters.

On macOS, modifier keys automatically display their native symbols (e.g. Command instead of Ctrl).

> If you’re on macOS right now, you can notice the difference in the above example: the first keybinding displays as `Ctrl K` on other platforms, but as `⌘ K` on macOS.

## Modifiers

The following modifier names are recognized (case-insensitive):

| Input | Default display | macOS display |
| --- | --- | --- |
| `cmd`, `command`, `meta`, `mod` | Ctrl | ⌘ |
| `ctrl`, `control` | Ctrl | ⌃ |
| `alt`, `option` | Alt | ⌥ |
| `shift` | Shift | ⇧ |

Any other key name is displayed as-is, capitalized.

> **Example 2**
> 
> ```markdown
> .keybinding {Cmd+Alt+Tab}
> ```
> 
> <kbd>Ctrl/⌘</kbd>+<kbd>Alt/⌥</kbd>+<kbd>Tab</kbd>

> **Example 3**
> 
> ```markdown
> .keybinding {Alt+F4}
> ```
> 
> <kbd>Alt/⌥</kbd>+<kbd>F4</kbd>

## Literal delimiter keys

Since `+`, `,`, and `-` are reserved as delimiters, use their literal names to represent them as keys:

| Literal | Key |
| --- | --- |
| `plus` | `+` |
| `comma` | `,` |
| `dash`, `minus` | `-` |
| `dot`, `period` | `.` |

> **Example 4**
> 
> ```markdown
> .keybinding {Ctrl+plus}
> ```
> 
> <kbd>Ctrl/⌃</kbd>+<kbd>+</kbd>

> **Example 5**
> 
> ```markdown
> .keybinding {Ctrl+dot}
> ```
> 
> <kbd>Ctrl/⌃</kbd>+<kbd>.</kbd>