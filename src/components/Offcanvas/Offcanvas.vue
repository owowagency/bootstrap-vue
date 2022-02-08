<template>
    <div
        :id="id"
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
import usePlacement, {placementProps} from '@/composables/usePlacement';
import {computed} from 'vue';
import {idProps} from '@/composables/useId';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    backdrop: {
        type: Boolean,
        default: false,
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

const {classes} = useClasses(computed(() => [
    usePlacement(props.placement, 'offcanvas-{0}').placementClass.value,
    computed(() => props.show ? 'show' : undefined).value,
]));
</script>
