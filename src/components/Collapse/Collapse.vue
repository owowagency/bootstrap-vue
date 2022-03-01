<template>
    <slot
        :id="id"
        name="toggle"
    >
        <div
            class="collapse-toggle"
            data-bs-toggle="collapse"
            :data-bs-target="`#${id}`"
            v-bind="$attrs"
        >
            <slot
                :id="id"
                name="toggle-content"
            />
        </div>
    </slot>

    <div
        :id="id"
        ref="collapse"
        class="collapse"
        :data-bs-parent="parentSelector"
    >
        <slot :id="id" />
    </div>
</template>

<script lang="ts">
import {idProps} from '@/composables/useId';
import {ref} from 'vue';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';

const collapseEvents = ['show', 'shown', 'hide', 'hidden'] as const;

type CollapseEvent = typeof collapseEvents[number];
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

const emit = defineEmits<{(event: CollapseEvent): void}>();

const collapse = ref<HTMLElement>();

useBootstrapEmits(
    collapse,
    collapseEvents,
    emit,
    'collapse',
);

const {bsInstance: bsCollapse} = useBootstrapInstance(
    'Collapse',
    collapse,
    {toggle: false},
);

defineExpose({bsCollapse});
</script>
