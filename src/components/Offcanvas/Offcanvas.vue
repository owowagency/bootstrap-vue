<template>
    <div
        :id="id"
        ref="offcanvas"
        class="offcanvas"
        :class="classes"
        :data-bs-backdrop="backdrop"
        :data-bs-scroll="scroll"
    >
        <div
            v-if="!!$slots.header || !!header"
            class="offcanvas-header"
        >
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div :class="{'offcanvas-body': !noBody}">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import usePlacement, {placementProps} from '@/composables/usePlacement';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const offcanvasEvents = ['show', 'shown', 'hide', 'hidden'] as const;

type OffcanvasEvent = typeof offcanvasEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    backdrop: {
        type: Boolean,
        default: true,
    },
    header: {
        type: String,
        default: undefined,
    },
    ...idProps,
    noBody: {
        type: Boolean,
        default: false,
    },
    ...placementProps,
    scroll: {
        type: Boolean,
        default: false,
    },
    show: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits<{(event: OffcanvasEvent): void}>();

const offcanvas = ref<HTMLElement>();

useBootstrapEmits(
    offcanvas,
    offcanvasEvents,
    emit,
    'offcanvas',
);

const {bsInstance: bsOffcanvas} = useBootstrapInstance(
    'Offcanvas',
    offcanvas,
);

const {classes} = useClasses(computed(() => [
    usePlacement(props.placement, 'offcanvas-{0}').placementClass.value,
    computed(() => props.show ? 'show' : undefined).value,
]));

defineExpose({bsOffcanvas});
</script>
