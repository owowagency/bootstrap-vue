<template>
    <div
        class="badge"
        :class="classes"
    >
        <!-- @slot Displays content inside the badge -->
        <slot />
    </div>
</template>

<script lang="ts">
import useVariant, {variantProps} from '@/composables/useVariant';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * Indicates if the badge should be shown as a pill
     */
    pill: {
        type: Boolean,
        default: false,
    },
    ...variantProps,
});

const {classes} = useClasses(computed(() => [
    computed(() => props.pill ? 'rounded-pill' : undefined).value,
    useVariant(props.variant, 'bg-{0}').variantClass.value,
]));
</script>

<docs>
```vue
<Badge
    pill
    variant="danger"
>
    I am a badge
</Badge>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |
</docs>
