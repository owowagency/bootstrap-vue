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

## Props

| Prop name     | Description                                         | Type                  | Values | Default   |
| ------------- | --------------------------------------------------- | --------------------- | ------ | --------- |
| body          | The body text of the modal                          | string                | -      | undefined |
| headerClass   | The classes that will be forwarded to the header    | string\|array\|object | -      | undefined |
| hideCloseBtn  | Defines if the close button should be hidden        | boolean               | -      | false     |
| modalCentered | Defines if the modal should be vertically centered  | boolean               | -      | false     |
| noBody        | Defines if the `modal-body` class should be omitted | boolean               | -      | false     |
| title         | The title text of the modal                         | string                | -      | undefined |

## Slots

| Name    | Description                            | Bindings |
| ------- | -------------------------------------- | -------- |
| header  | Displays the header of the modal       |          |
| title   | Displays the header title of the modal |          |
| default | Displays the body of the modal         |          |
| footer  | Displays the footer of the modal       |          |
