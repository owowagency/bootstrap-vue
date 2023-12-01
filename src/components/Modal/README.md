# Modal

```vue
<Modal hideCloseBtn>
    <form>
        ...
    </form>

    <template #footer>
        <Button>Submit</Button>
    </template>
</Modal>
```

## Imported Props

| Prop name | Description                   | Type                                       | Values | Default |
| --------- | ----------------------------- | ------------------------------------------ | ------ | ------- |
| id        | The id used for the component | string                                     | -      | `uuid`  |
| size      | The size of the component     | [Size](../../composables/useSize) (string) | -      | 'md'    |

<!-- TODO Auto-generate based on type? -->

## Events

| Name          | Args | Description                                                                                                       |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the `show` instance method is called                                            |
| shown         |      | This event is fired when the modal has been made visible to the user                                              |
| hide          |      | This event is fired immediately when the `hide` instance method has been called                                   |
| hidden        |      | This event is fired when the modal has finished being hidden from the user                                        |
| hidePrevented |      | This event is fired when the modal is shown, its backdrop is static and a click outside of the modal is performed |

## Props

| Prop name       | Description                                         | Type                  | Values | Default   |
| --------------- | --------------------------------------------------- | --------------------- | ------ | --------- |
| body            | The body text of the modal                          | string                | -      | undefined |
| headerClass     | The classes that will be forwarded to the header    | string\|array\|object | -      | undefined |
| hideCloseBtn    | Defines if the close button should be hidden        | boolean               | -      | false     |
| modalCentered   | Defines if the modal should be vertically centered  | boolean               | -      | false     |
| modalScrollable | Defines if the modal should scrollable              | boolean               | -      | false     |
| noBody          | Defines if the `modal-body` class should be omitted | boolean               | -      | false     |
| title           | The title text of the modal                         | string                | -      | undefined |

## Slots

| Name    | Description                            | Bindings |
| ------- | -------------------------------------- | -------- |
| header  | Displays the header of the modal       |          |
| title   | Displays the header title of the modal |          |
| default | Displays the body of the modal         |          |
| footer  | Displays the footer of the modal       |          |
