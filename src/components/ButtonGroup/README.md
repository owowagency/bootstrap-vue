# ButtonGroup

```vue
<ButtonGroup vertical>
    <Button>
        Top
    </Button>

    <Button>
        Middle
    </Button>

    <Button>
        Bottom
    </Button>
</ButtonGroup>
```

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |

## Props

| Prop name | Description                   | Type    | Values | Default |
| --------- | ----------------------------- | ------- | ------ | ------- |
| vertical  | Stacks the buttons vertically | boolean | -      | false   |

## Slots

| Name    | Description                              | Bindings |
| ------- | ---------------------------------------- | -------- |
| default | Displays content inside the button group |          |
