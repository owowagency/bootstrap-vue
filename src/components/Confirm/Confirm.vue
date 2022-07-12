<template>
    <Modal
        ref="modal"
        :title="title"
    >
        <!-- @slot Displays content inside the confirm modal -->
        <slot>
            {{ body }}
        </slot>

        <template #footer>
            <!-- @slot Displays content inside the cancel button -->
            <slot name="buttonCancel">
                <Button
                    class="button-cancel"
                    :outline="cancelOutline"
                    :variant="cancelVariant"
                    @click="cancel"
                >
                    {{ cancelText }}
                </Button>
            </slot>

            <!-- @slot Displays content inside the ok button -->
            <slot name="buttonOk">
                <Button
                    class="button-ok"
                    :variant="okVariant"
                    @click="ok"
                >
                    {{ okText }}
                </Button>
            </slot>
        </template>
    </Modal>
</template>

<script lang="ts">
import {ComponentPublicInstance, ref} from 'vue';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import {variantProp} from '@/composables/useVariant';
</script>

<script lang="ts" setup>
defineProps({
    /**
     * The body of the confirm modal
     */
    body: {
        type: String,
        default: 'Are you sure?',
    },
    /**
     * Changes the cancel button to an outline variant
     */
    cancelOutline: {
        type: Boolean,
        default: false,
    },
    /**
     * The text of the cancel button
     */
    cancelText: {
        type: String,
        default: 'No',
    },
    /**
     * The variant of the cancel button
     */
    cancelVariant: variantProp('light'),
    /**
     * The text of the ok button
     */
    okText: {
        type: String,
        default: 'Yes',
    },
    /**
     * The variant of the ok button
     */
    okVariant: variantProp('primary'),
    /**
     * The title of the confirm modal
     */
    title: {
        type: String,
        default: 'Confirmation',
    },
});

const emit = defineEmits<{
    /**
     * Emitted when the cancel button is clicked
     */
    (e: 'cancelled'): void,
    /**
     * Emitted when the ok button is clicked
     */
    (e: 'confirmed'): void,
}>();

const cancel = () => {
    emit('cancelled');

    hide();
};

const ok = () => {
    emit('confirmed');

    hide();
};

const modal = ref<ComponentPublicInstance<typeof Modal>>();

const hide = () => modal.value.bsModal?.hide();

const show = () => modal.value.bsModal?.show();

const toggle = () => modal.value.bsModal?.toggle();

defineExpose({hide, show, toggle});
</script>

<docs>
```vue
<Confirm
    body="Are you sure you want to delete this?"
    :cancelOutline="true"
/>
```

<!-- TODO Fix the variants showing in props -->
## Imported Props

| Prop name     | Description                  | Type                                             | Values | Default   |
| ------------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| cancelVariant | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'light'   |
| okVariant     | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |
</docs>
