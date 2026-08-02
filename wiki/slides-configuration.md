> For the complete documentation index, see [llms.txt](/wiki/llms.txt).

# Slides configuration

The **`.slides`**  function allows you to override the default configuration of `slides` documents. All of its parameters are **optional**:

| Parameter | Description | Accepts | Default |
| --- | --- | --- | --- |
| `center` | Whether content should be centered vertically. | [`Boolean`](boolean.md) | Up to the current layout theme. |
| `controls` | Whether navigation controls should be shown. | [`Boolean`](boolean.md) | `true` |
| `speakernotes` | Whether [speaker notes](slides-speaker-notes.md) should be displayed outside of the speaker view. | [`Boolean`](boolean.md) | `false` |
| `transition` | Transition style between slides. | `none`, `fade`, `slide`, `zoom` | `slide` |
| `speed` | Transition speed between slides.\<br/>Requires `transition` to be set. | `default`, `fast`, `slow` | `default` |