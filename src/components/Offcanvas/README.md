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
