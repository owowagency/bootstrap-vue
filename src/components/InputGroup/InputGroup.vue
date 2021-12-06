<template>
    <div
        class="input-group"
        :class="classes"
    >
        <slot name="prepend">
            <span
                v-if="prepend"
                class="input-group-text"
            >
                {{ prepend }}
            </span>
        </slot>

        <slot />

        <slot name="append">
            <span
                v-if="append"
                class="input-group-text"
            >
                {{ append }}
            </span>
        </slot>
    </div>
</template>

<script lang="ts">
import useSize, {sizeProps} from '@/composables/useSize';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    append: {
        type: String,
        default: undefined,
    },
    prepend: {
        type: String,
        default: undefined,
    },
    ...sizeProps,
});

const {classes} = useClasses(computed(() => [
    useSize(props.size, 'input-group-{0}').sizeClass.value,
]));
</script>
