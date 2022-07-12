<template>
    <Button
        :disabled="disabled"
        :variant="variant"
    >
        <span
            v-if="error || loading || success"
            class="me-2"
        >
            <Spinner
                v-if="loading"
                size="sm"
                variant=""
            />

            <svg
                v-if="success"
                class="button-state-icon"
                data-test="success"
                fill="currentColor"
                height="1em"
                viewBox="3 3 10 10"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
            >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>

            <svg
                v-if="error"
                class="button-state-icon"
                data-test="error"
                fill="currentColor"
                height="1em"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
            >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
            </svg>
        </span>

        <!-- @slot Displays content inside the button -->
        <slot />
    </Button>
</template>

<script lang="ts">
import {Variant, variantProp} from '@/composables/useVariant';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';
import {computed} from 'vue';
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * Controls the error state of the button
     */
    error: {
        type: Boolean,
        default: false,
    },
    errorVariant: variantProp('danger'),
    /**
     * Controls the loading state of the button
     */
    loading: {
        type: Boolean,
        default: false,
    },
    /**
     * Controls the success state of the button
     */
    success: {
        type: Boolean,
        default: false,
    },
    successVariant: variantProp('success'),
    variant: variantProp(),
});

const disabled = computed(() => props.loading);

const variant = computed<Variant>(() => {
    switch (true) {
        case props.success:
            return props.successVariant;

        case props.error:
            return props.errorVariant;

        default:
            return props.variant;
    }
});
</script>

<docs>
```vue
<ButtonState
    :error="error"
    :loading="loading"
    :success="success"
>
    Submit
</ButtonState>
```

<!-- TODO Fix the variants showing in props -->
## Imported Props

| Prop name      | Description                                       | Type                                             | Values | Default   |
| -------------- | ------------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| errorVariant   | The variant of the component in the error state   | [Variant](../../composables/useVariant) (string) | -      | 'danger'  |
| successVariant | The variant of the component in the success state | [Variant](../../composables/useVariant) (string) | -      | 'success' |
| variant        | The variant of the component                      | [Variant](../../composables/useVariant) (string) | -      | 'primary' |
</docs>
