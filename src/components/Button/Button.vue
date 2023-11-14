<template>
    <component
        :is="is"
        class="btn"
        :class="classes"
        :disabled="disabled"
        :href="href"
        :to="to"
    >
        <!-- @slot Displays content inside the button -->
        <slot />
    </component>
</template>

<script lang="ts">
import {PropType, computed} from 'vue';
import useDisabled, {disabledProps} from '@/composables/useDisabled';
import useSize, {sizeProps} from '@/composables/useSize';
import useVariant, {variantProps} from '@/composables/useVariant';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...disabledProps,
    href: {
        type: String,
        default: undefined,
    },
    is: {
        type: String,
        default: undefined,
    },
    /**
     * Changes the button to an outline variant
     */
    outline: {
        type: Boolean,
        default: false,
    },
    ...sizeProps,
    to: {
        type: [Object, String] as PropType<string|Record<string, unknown>>,
        default: undefined,
    },
    ...variantProps,
});

const variantClassTemplate = computed(() => `btn-${props.outline ? 'outline-' : ''}{0}`);

const {classes} = useClasses(computed(() => [
    useDisabled(props.disabled).disabledClass.value,
    useSize(props.size, 'btn-{0}').sizeClass.value,
    useVariant(props.variant, variantClassTemplate).variantClass.value,
]));

const is = computed(() => {
    if (props.is) {
        return props.is;
    }

    if (props.to) {
        return 'RouterLink';
    }

    if (props.href) {
        return 'a';
    }

    return 'button';
});
</script>

<docs>
```vue
<Button variant="danger">
    Delete
</Button>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| disabled  | Disables the component       | boolean                                          | -      | false     |
| size      | The size of the component    | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |
</docs>
