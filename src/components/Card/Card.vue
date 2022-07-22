<template>
    <div class="card">
        <div
            v-if="!!$slots.header || !!header"
            class="card-header"
        >
            <!-- @slot Displays content inside the header of the card -->
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div :class="{'card-body': !noBody}">
            <!-- @slot Displays content inside the body of the card -->
            <slot name="default">
                <h5
                    v-if="title"
                    class="card-title"
                >
                    {{ title }}
                </h5>

                <h6
                    v-if="subtitle"
                    class="card-subtitle"
                >
                    {{ subtitle }}
                </h6>

                <div
                    v-if="text"
                    class="card-text"
                >
                    {{ text }}
                </div>
            </slot>
        </div>

        <div
            v-if="!!$slots.footer || footer"
            class="card-footer"
        >
            <!-- @slot Displays content inside the footer of the card -->
            <slot name="footer">
                {{ footer }}
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    /**
     * The text displayed in the footer. Will be overwritten by the user of the `footer` slot
     */
    footer: {
        type: String,
        default: undefined,
    },
    /**
     * The text displayed in the header. Will be overwritten by the user of the `header` slot
     */
    header: {
        type: String,
        default: undefined,
    },
    /**
     * Prevents the `.card-body` class from being added. Useful for when multiple card bodies are required
     */
    noBody: {
        type: Boolean,
        default: false,
    },
    /**
     * The subtitle displayed in the body. Will be overwritten by the user of the `default` slot
     */
    subtitle: {
        type: String,
        default: undefined,
    },
    /**
     * The text displayed in the body. Will be overwritten by the user of the `default` slot
     */
    text: {
        type: String,
        default: undefined,
    },
    /**
     * The title displayed in the body. Will be overwritten by the user of the `default` slot
     */
    title: {
        type: String,
        default: undefined,
    },
});
</script>

<docs>
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
</docs>
