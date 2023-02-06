# FormGroup

```vue
<FormGroup v-model="username" name="username" label="Username" />
```

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| id          | The id used for the component                | string                                            | -      | `uuid`  |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |

## Props

| Prop name       | Description                                                                       | Type                  | Values | Default     |
| --------------- | --------------------------------------------------------------------------------- | --------------------- | ------ | ----------- |
| description     | The description of the form group<br/>_Displayed between label and input_         | string                | -      | undefined   |
| helpText        | The help text of the form group<br/>_Displayed under input_                       | string                | -      | undefined   |
| invalidFeedback | The invalid feedback of the form group<br/>_Displayed between input and helpText_ | array\|string         | -      | () =&gt; [] |
| label           | The label to display                                                              | string                | -      | undefined   |
| labelClass      | The classes that will be forwarded to the label                                   | string\|array\|object | -      | undefined   |
| validFeedback   | The valid feedback of the form group<br/>_Displayed between input and helpText_   | array\|string         | -      | () =&gt; [] |

## Slots

| Name    | Description                       | Bindings                                                                                                                  |
| ------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| label   | Displays content inside the label | **label** `string` - The text of the label                                                                                |
| default | Displays the input                | **is-invalid** `boolean` - Describes if the input is invalid<br/>**is-valid** `boolean` - Describes if the input is valid |

## Events

| Event name        | Properties                      | Description                           |
| ----------------- | ------------------------------- | ------------------------------------- |
| update:modelValue | **value** `any` - The new value | Fired when the model value is updated |
