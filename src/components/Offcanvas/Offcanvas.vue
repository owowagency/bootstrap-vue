<template>
    <div
        :id="id"
        class="offcanvas offcanvas-start"
        :class="{show}"
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
import {computed} from 'vue';
import {idProps} from '@/composables/useId';
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
    show: {
        type: Boolean,
        default: false,
    },
    // Placement
    // Backdrop
    // Scroll
});
</script>
