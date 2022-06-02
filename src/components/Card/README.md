# Card

```html
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

| Name | Type | Description |
| - | - | - |
| footer | string | The text displayed in the footer. Will be overwritten by the user of the `footer` slot. |
| header | string | The text displayed in the header. Will be overwritten by the user of the `header` slot. |
| noBody | boolean | Prevents the `.card-body` class from being added. Useful for when multiple card bodies are requried. |
| subtitle | string | The subtitle displayed in the body. Will be overwritten by the user of the `default` slot. |
| text | string | The text displayed in the body. Will be overwritten by the user of the `default` slot. |
| title | string | The title displayed in the body. Will be overwritten by the user of the `default` slot. |

## Slots

| Name | Description |
| - | - |
| header | Displays content inside the header of the card. |
| footer | Displays content inside the footer of the card. |
| default | Displays content inside the body of the card. |
