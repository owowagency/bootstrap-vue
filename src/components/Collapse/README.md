# Collapse

```vue
<Collapse parent-selector="#parent">
    <template #toggle-content="{id}">
        <Button
            data-bs-toggle="collapse"
            :data-bs-target="'#' + id"
        >
            Open me
        </Button>
    </template>

    <Card text="This panel is hidden by default but revealed when the user activates the relevant trigger." />
</Collapse>
```

## Props

| Prop name      | Description                                                                    | Type   | Values | Default |
| -------------- | ------------------------------------------------------------------------------ | ------ | ------ | ------- |
| parentSelector | The selector of the parent element<br/>_This should be a valid query selector_ | string | -      | null    |

## Slots

| Name          | Description                          | Bindings                                        |
| ------------- | ------------------------------------ | ----------------------------------------------- |
| toggle        | Displays the toggle for the collapse | **id** `string` - The id of the target collapse |
| toggleContent | Displays the content for the toggle  | **id** `string` - The id of the target collapse |
| default       | Displays the content of the collapse | **id** `string` - The id of the collapse        |
