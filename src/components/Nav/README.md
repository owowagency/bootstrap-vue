# Nav

```vue
<Nav fill tabs>
    <NavItem>Home</NavItem>
    <NavItem>Docs</NavItem>
    <NavItem>About</NavItem>
</Nav>
```

## Props

| Prop name | Description                                                                       | Type    | Values | Default |
| --------- | --------------------------------------------------------------------------------- | ------- | ------ | ------- |
| fill      | Defines if the `nav-fill` class should be used                                    | boolean | -      | false   |
| justified | Defines if the `nav-justified` class should be used                               | boolean | -      | false   |
| pills     | Defines if the `nav-pills` class should be used                                   | boolean | -      | false   |
| tabs      | Defines if the `nav-tabs` class should be used                                    | boolean | -      | false   |
| vertical  | Defines if the `flex-column` class should be used<br/>_Displays items vertically_ | boolean | -      | false   |

## Slots

| Name    | Description                     | Bindings |
| ------- | ------------------------------- | -------- |
| default | Displays the content of the nav |          |
