# Code

You can create code blocks using the standard Markdown specification: either with 4-space or 1-tab indentation, or with triple backticks or tildes.

> **Example 1**
> 
> ````markdown
> ```javascript
> function greet(name) {
>     return `Hello, ${name}!`;
> }
> ```
> ````
> 
> ```javascript
> function greet(name) {
>     return `Hello, ${name}!`;
> }
> ```

Quarkdown also provides a more powerful **`.code`**  block function.

> **Example 2**
> 
> ```markdown
> .code lang:{javascript}
>     function greet(name) {
>         return `Hello, ${name}!`;
>     }
> ```
> 
> ```javascript
> function greet(name) {
>     return `Hello, ${name}!`;
> }
> ```

## `.code` vs. standard code blocks

### Content processing

Standard code blocks render their content as-is without any processing. The `.code` function, on the other hand, accepts any Quarkdown string as its body parameter, which means you can **evaluate functions** before displaying their output as code. This is particularly useful when combining `.code` with [`.read`](file-text-content.qd) to load a code snippet from a file:

> **Example 3**
> 
> ```markdown
> .code
>     .read {assets/point.ts}
> ```
> 
> ```
> export class Point {
>     x: number;
>     y: number;
> 
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```

### Language specification

Standard fenced code blocks specify their language right after the opening delimiter, for example ````markdown`.

The `.code` function specifies the language through the optional `lang` argument, for example `.code {markdown}` or `.code lang:{markdown}`. If unspecified, auto-detection is attempted.

> **Example 4**
> 
> ```markdown
> .code lang:{typescript}
>     .read {assets/point.ts}
> ```
> 
> ```typescript
> export class Point {
>     x: number;
>     y: number;
> 
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```

### Line numbers

Standard code blocks always show line numbers by default. The `.code` function lets you toggle line numbers using the optional `linenumbers` [`Boolean`](boolean.qd) argument, which defaults to `yes` (equivalent to `true`).

> **Example 5**
> 
> ```markdown
> .code linenumbers:{no}
>     .read {assets/point.ts}
> ```
> 
> ```
> export class Point {
>     x: number;
>     y: number;
> 
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```

### Focused lines

The `.code` function allows you to focus on a [`Range`](range.qd) of lines, starting from `1`. Line numbers must be enabled for this feature to work.

> **Example 6**
> 
> ```markdown
> .code focus:{5..8}
>     .read {assets/point.ts}
> ```
> 
> ```
> export class Point {
>     x: number;
>     y: number;
> 
>     constructor(x: number, y: number) {
>         this.x = x;
>         this.y = y;
>     }
> }
> ```

### Extending

`.code` is a [primitive](primitives.qd), so [extending it](element-styling.qd) affects every code block in the document at once, including fenced and indented blocks.

> **Example 7**
> 
> ````markdown
> .extend {code} where:{lang: .lang::equals {javascript}}
>     .super linenumbers:{no}
> 
> ```javascript
> function greet(name) {
>     return `Hello, ${name}!`;
> }
> ```
> ````

## Inline code

Just as `.code` is a dynamic alternative to triple backticks (`````), **`.codespan {text}`** is a dynamic alternative to inline backticks (``text``). This allows function calls within its content.