# Card

```vue
<Card
  subtitle="Card subtitle"
  text="Some quick example text to build on the card title and make up the bulk of the card's content."
  title="Card title"
/>

<Card no-body>
    <template #default>
        <div class="card-body">
            I have ...
        </div>

        <div class="card-body">
            ... two bodies.
        </div>
    </template>

    <template #footer>
        <Button>
            That is great!
        </Button>
    </template>
</Card>
```

## Props

| Prop name | Description                                                                                         | Type    | Values | Default   |
| --------- | --------------------------------------------------------------------------------------------------- | ------- | ------ | --------- |
| footer    | The text displayed in the footer. Will be overwritten by the user of the `footer` slot              | string  | -      | undefined |
| header    | The text displayed in the header. Will be overwritten by the user of the `header` slot              | string  | -      | undefined |
| noBody    | Prevents the `.card-body` class from being added. Useful for when multiple card bodies are required | boolean | -      | false     |
| subtitle  | The subtitle displayed in the body. Will be overwritten by the user of the `default` slot           | string  | -      | undefined |
| text      | The text displayed in the body. Will be overwritten by the user of the `default` slot               | string  | -      | undefined |
| title     | The title displayed in the body. Will be overwritten by the user of the `default` slot              | string  | -      | undefined |

## Slots

| Name    | Description                                    | Bindings |
| ------- | ---------------------------------------------- | -------- |
| header  | Displays content inside the header of the card |          |
| default | Displays content inside the body of the card   |          |
| footer  | Displays content inside the footer of the card |          |
