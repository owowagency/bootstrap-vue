# FormPills

```vue
<FormPills v-model="emails" :value-matcher="/.+@.+\.\w+/" />
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |

## Props

| Prop name           | Description                                                                | Type           | Values | Default         |
| ------------------- | -------------------------------------------------------------------------- | -------------- | ------ | --------------- |
| editItemOnBackspace | Defines if items should be removed when pressing backspace                 | boolean        | -      | false           |
| maxItems            | The maximym amount of items that can be added to the list                  | number         | -      | Infinity        |
| modelValue          | The model value                                                            | string[]       | -      | () => []        |
| placeholder         | The placeholder for the input                                              | string         | -      | ''              |
| separator           | The separator that checks if an item should be separated from the next one | string\|RegExp | -      | /[\s\n]+/       |
| submitKeys          | The key to press to submit an item                                         | string[]       | -      | () => ['Enter'] |
| valueMatcher        | The matcher to check if an item is valid                                   | string\|RegExp | -      | /^.+\$/         |

## Events

| Event name        | Properties                           | Description                           |
| ----------------- | ------------------------------------ | ------------------------------------- |
| update:modelValue | **value** `string[]` - The new value | Fired when the model value is updated |
