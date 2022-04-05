<template>
    <div
        :id="id"
        ref="modal"
        class="modal"
    >
        <div
            class="modal-dialog"
            :class="classes"
        >
            <div class="modal-content">
                <div
                    v-if="!!$slots.header || !!$slots.title || !!title || !hideCloseBtn"
                    :class="['modal-header', headerClass]"
                >
                    <slot name="header">
                        <h5
                            v-if="!!$slots.title || !!title"
                            class="modal-title"
                        >
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </h5>

                        <button
                            v-if="!hideCloseBtn"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        />
                    </slot>
                </div>

                <div
                    v-if="$slots.default || body"
                    :class="{'modal-body': !noBody}"
                >
                    <slot>
                        {{ body }}
                    </slot>
                </div>

                <div
                    v-if="$slots.footer"
                    class="modal-footer"
                >
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, onBeforeUnmount, ref} from 'vue';
import useSize, {sizeProps} from '@/composables/useSize';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const modalEvents = ['show', 'shown', 'hide', 'hidden', 'hidePrevented'] as const;

type ModalEvent = typeof modalEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    body: {
        type: String,
        default: undefined,
    },
    headerClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    hideCloseBtn: {
        type: Boolean,
        default: false,
    },
    ...idProps,
    modalCentered: {
        type: Boolean,
        default: false,
    },
    noBody: {
        type: Boolean,
        default: false,
    },
    ...sizeProps,
    title: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits<{(event: ModalEvent): void}>();

const modal = ref<HTMLElement>();

useBootstrapEmits(
    modal,
    modalEvents,
    emit,
    'modal',
);

const {bsInstance: bsModal} = useBootstrapInstance(
    'Modal',
    modal,
);

const {classes} = useClasses(computed(() => [
    props.modalCentered ? 'modal-dialog-centered' : null,
    props.size ? useSize(props.size, 'modal-{0}').sizeClass.value : null,
]));

onBeforeUnmount(() => {
    if (bsModal.value) {
        bsModal.value.dispose();
    }
});

defineExpose({bsModal});
</script>
