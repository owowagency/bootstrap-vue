<template>
    <div
        :id="id"
        class="offcanvas"
        :class="classes"
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
    show: {
        type: Boolean,
        default: false,
    },
    // Backdrop
    // Scroll
});

const {classes} = useClasses(computed(() => [
    computed(() => props.show ? 'show' : undefined).value,
    usePlacement(props.placement, 'offcanvas-{0}').placementClass.value,
]));
</script>
