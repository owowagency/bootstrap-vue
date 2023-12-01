<template>
    <Component
        :is="tag"
        class="list-group-item"
        :class="classes"
    >
        <!-- @slot Displays the content of the list group item -->
        <slot />
    </Component>
</template>

<script lang="ts">
import useActive, {activeProps} from '@/composables/useActive';
import useDisabled, {disabledProps} from '@/composables/useDisabled';
import useVariant, {variantProp} from '@/composables/useVariant';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...activeProps,
    ...disabledProps,
    /**
     * The tag to be used for the list group item
     */
    tag: {
        type: String,
        default: 'li',
    },
    variant: variantProp(''),
});


const {classes} = useClasses(computed(() => [
    ['a', 'button'].includes(props.tag) ? 'list-group-item-action' : undefined,
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
    useVariant(props.variant, 'list-group-item-{0}').variantClass.value,
]));
</script>

<docs>
```vue
<ListGroupItem>
    List group item
</ListGroupItem>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | ------- |
| active    | Adds the `active` class      | boolean                                          | -      | false   |
| disabled  | Disables the component       | boolean                                          | -      | false   |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | ''      |
</docs>
