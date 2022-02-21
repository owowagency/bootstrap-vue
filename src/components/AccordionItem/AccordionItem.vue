<template>
    <div class="accordion-item">
        <component
            :is="headerTag"
            class="accordion-header"
            :class="headerClass"
        >
            <button
                class="accordion-button collapsed"
                :class="buttonClass"
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
            :class="collapseClass"
            :data-bs-parent="parentId ? `#${parentId}` : undefined"
        >
            <div
                class="accordion-body"
                :class="bodyClass"
            >
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
    bodyClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    buttonClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    collapseClass: {
        type: [String, Array, Object],
        default: undefined,
    },
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
