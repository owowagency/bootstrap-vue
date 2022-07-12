# Accordion

```vue
<Accordion>
    <AccordionItem header="Header">
        Content
    </AccordionItem>
</Accordion>
```

## Imported Props

| Prop name | Description                            | Type    | Values | Default |
| --------- | -------------------------------------- | ------- | ------ | ------- |
| flush     | Use the flush variant of the component | boolean | -      | false   |
| id        | The id used for the component          | string  | -      | `uuid`  |

## Slots

| Name    | Description                           | Bindings                                                |
| ------- | ------------------------------------- | ------------------------------------------------------- |
| default | Displays the content of the accordion | **parent-id** `string` - The id of the parent accordion |
