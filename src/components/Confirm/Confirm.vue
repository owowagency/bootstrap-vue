<template>
    <Modal
        ref="modal"
        :title="title"
    >
        <slot>
            {{ body }}
        </slot>

        <template #footer>
            <slot name="button-cancel">
                <Button
                    :outline="cancelOutline"
                    :variant="cancelVariant"
                    @click="hide"
                >
                    {{ cancelText }}
                </Button>
            </slot>

            <slot name="button-ok">
                <Button
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
    body: {
        type: String,
        default: 'Are you sure?',
    },
    cancelOutline: {
        type: Boolean,
        default: false,
    },
    cancelText: {
        type: String,
        default: 'No',
    },
    cancelVariant: variantProp('light'),
    okText: {
        type: String,
        default: 'Yes',
    },
    okVariant: variantProp('primary'),
    title: {
        type: String,
        default: 'Confirmation',
    },
});

const emit = defineEmits<{(e: 'confirmed'): void}>();

const ok = () => {
    emit('confirmed');

    hide();
};

const modal = ref<ComponentPublicInstance<typeof Modal>>();

const hide = () => modal.value.bsModal.hide();

const show = () => modal.value.bsModal.show();

defineExpose({hide, show});
</script>
