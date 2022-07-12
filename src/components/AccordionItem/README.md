# AccordionItem

```vue
<AccordionItem header="I'm the header">
    <div>I'm the body</div>
</AccordionItem>
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |

## Props

| Prop name     | Description                                         | Type                  | Values | Default   |
| ------------- | --------------------------------------------------- | --------------------- | ------ | --------- |
| bodyClass     | The classes that will be forwarded to the body.     | string\|array\|object | -      | undefined |
| buttonClass   | The classes that will be forwarded to the button.   | string\|array\|object | -      | undefined |
| collapseClass | The classes that will be forwarded to the collapse. | string\|array\|object | -      | undefined |
| header        | The text that will be shown in the header.          | string                | -      | undefined |
| headerClass   | The classes that will be forwarded to the header.   | string\|array\|object | -      | undefined |
| headerTag     | The html tag that will be used for the header.      | string                | -      | 'h2'      |
| parentId      | The id of the parent `Accordion` component.         | string                | -      | undefined |

## Slots

| Name    | Description                          | Bindings |
| ------- | ------------------------------------ | -------- |
| header  | Displays the header of the accordion |          |
| default | Displays the body of the accordion   |          |
