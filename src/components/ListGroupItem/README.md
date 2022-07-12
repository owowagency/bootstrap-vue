# ListGroupItem

```vue
<ListGroupItem>
    List group item
</ListGroupItem>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | ------- |
| active    | Adds the `active` class      | boolean                                          | -      | false   |
| disabled  | Disables the component       | boolean                                          | -      | false   |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | ''      |

## Props

| Prop name | Description                                 | Type            | Values | Default |
| --------- | ------------------------------------------- | --------------- | ------ | ------- |
| tag       | The tag to be used for the list group item. | string          | -      | 'li'    |
| variant   |                                             | variantProp('') | -      |         |

## Slots

| Name    | Description                                 | Bindings |
| ------- | ------------------------------------------- | -------- |
| default | Displays the content of the list group item |          |
