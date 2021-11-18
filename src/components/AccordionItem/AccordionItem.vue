<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                :data-bs-target="`#${id}`"
            >
                <slot name="header">
                    {{ header }}
                </slot>
            </button>
        </h2>

        <div
            :id="`${id}`"
            class="accordion-collapse collapse"
            :data-bs-parent="parentId ? `#${parentId}` : undefined"
        >
            <div class="accordion-body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
defineProps({
    header: {
        type: String,
        default: undefined,
    },
    ...idProps,
    parentId: {
        type: String,
        default: undefined,
    },
});
</script>
