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
                    v-if="!!$slots.header || !!$slots.title || !!title"
                    class="modal-header"
                >
                    <slot name="header">
                        <h5 class="modal-title">
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </h5>

                        <button
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
import {computed, onBeforeUnmount, onMounted, ref} from 'vue';
import useSize, {sizeProps} from '@/composables/useSize';
import {idProps} from '@/composables/useId';
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

const bsModal = ref();

const {classes} = useClasses(computed(() => [
    props.modalCentered ? 'modal-dialog-centered' : null,
    props.size ? useSize(props.size, 'modal-{0}').sizeClass.value : null,
]));

onMounted(async() => {
    if (document) {
        const bootstrap = await import('bootstrap');

        bsModal.value = bootstrap.Modal.getOrCreateInstance(modal.value);

        modalEvents.forEach(event =>
            modal.value
                .addEventListener(`${event}.bs.modal`, () => emit(event)),
        );
    }
});

onBeforeUnmount(() => {
    if (bsModal.value) {
        bsModal.value.dispose();
    }
});
</script>
