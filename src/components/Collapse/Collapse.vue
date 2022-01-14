<template>
    <div
        class="d-inline-block"
        data-bs-toggle="collapse"
        :data-bs-target="`#${id}`"
        @click="clickToggle"
    >
        <slot
            name="toggle"
        />
    </div>

    <div
        :id="id"
        class="collapse"
        :data-bs-parent="parentSelector"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
defineProps({
    ...idProps,
    // Should be a valid query selector.
    parentSelector: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['click:toggle']);

const clickToggle = () => emit('click:toggle');
</script>
