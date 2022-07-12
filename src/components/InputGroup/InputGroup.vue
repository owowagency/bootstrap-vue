<template>
    <div
        class="input-group"
        :class="classes"
    >
        <!-- @slot Displays the prepend of the input -->
        <slot name="prepend">
            <span
                v-if="prepend"
                class="input-group-text"
            >
                {{ prepend }}
            </span>
        </slot>


        <!-- @slot Displays the content of the input -->
        <slot />

        <!-- @slot Displays the append of the input -->
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
    /**
     * The text to prepend to the input
     */
    append: {
        type: String,
        default: undefined,
    },
    /**
     * The text to append to the input
     */
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

<docs>
```vue
<InputGroup prepend="$">
    <FormControl v-model="price" />
</InputGroup>
```

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |
</docs>
