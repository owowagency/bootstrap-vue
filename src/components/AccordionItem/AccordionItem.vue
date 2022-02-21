<template>
    <div class="accordion-item">
        <component
            :is="headerTag" 
            class="accordion-header"
            :class="headerClass"
        >
            <button
                class="accordion-button collapsed"
                data-bs-toggle="collapse"
                :data-bs-target="`#${id}`"
            >
                <slot name="header">
                    {{ header }}
                </slot>
            </button>
        </component>

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
    headerClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    headerTag: {
        type: String,
        default: 'h2',
    },
    ...idProps,
    parentId: {
        type: String,
        default: undefined,
    },
});
</script>
