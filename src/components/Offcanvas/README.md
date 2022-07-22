# Offcanvas

```vue
<Offcanvas header="Navigation">
    <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Docs</NavItem>
        <NavItem>About</NavItem>
    </Nav>
</Offcanvas>
```

## Imported Props

| Prop name | Description                    | Type                                            | Values | Default |
| --------- | ------------------------------ | ----------------------------------------------- | ------ | ------- |
| id        | The id used for the component  | string                                          | -      | `uuid`  |
| placement | The placement of the component | [Size](../../composables/usePlacement) (string) | -      | 'start' |

<!-- TODO Auto-generate based on type? -->

## Events

| Name          | Args | Description                                                                                                               |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the `show` instance method is called                                                    |
| shown         |      | This event is fired when an offcanvas element has been made visible to the user                                           |
| hide          |      | This event is fired immediately when the `hide` instance method has been called                                           |
| hidden        |      | This event is fired when an offcanvas element has been hidden from the user                                               |
| hidePrevented |      | This event is fired when the offcanvas is shown, its backdrop is static and a click outside of the offcanvas is performed |

## Props

| Prop name | Description                                                               | Type    | Values | Default   |
| --------- | ------------------------------------------------------------------------- | ------- | ------ | --------- |
| backdrop  | Defines if a backdrop should be shown                                     | boolean | -      | true      |
| header    | The header text of the offcanvas                                          | string  | -      | undefined |
| noBody    | Defines if the `offcanvas-body` class should be omitted                   | boolean | -      | false     |
| scroll    | Defines if the main content should be scrollable when offcanvas is opened | boolean | -      | false     |
| show      | Defines if the offcanvas is shown                                         | boolean | -      | false     |

## Slots

| Name    | Description                                         | Bindings |
| ------- | --------------------------------------------------- | -------- |
| header  | Displays content inside the header of the offcanvas |          |
| default | Displays the body of the offcanvas                  |          |
