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

<!-- TODO Auto-generate based on type? -->

## Events

| Name   | Args | Description                                                                   |
| ------ | ---- | ----------------------------------------------------------------------------- |
| show   |      | This event fires immediately when the `show` instance method is called        |
| shown  |      | This event is fired when a collapse element has been made visible to the user |
| hide   |      | This event is fired immediately when the `hide` method has been called        |
| hidden |      | This event is fired when a collapse element has been hidden from the user     |

## Props

| Prop name      | Description                                                                    | Type    | Values | Default |
| -------------- | ------------------------------------------------------------------------------ | ------- | ------ | ------- |
| parentSelector | The selector of the parent element<br/>_This should be a valid query selector_ | string  | -      | null    |
| visible        | Whether the collapse is visible                                                | boolean | -      | false   |

## Slots

| Name          | Description                          | Bindings                                        |
| ------------- | ------------------------------------ | ----------------------------------------------- |
| toggle        | Displays the toggle for the collapse | **id** `string` - The id of the target collapse |
| toggleContent | Displays the content for the toggle  | **id** `string` - The id of the target collapse |
| default       | Displays the content of the collapse | **id** `string` - The id of the collapse        |
