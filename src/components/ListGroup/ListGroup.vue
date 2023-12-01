<template>
    <Component
        :is="tag"
        class="list-group"
        :class="classes"
    >
        <!-- @slot Displays the content of the list group -->
        <slot />
    </Component>
</template>

<script lang="ts">
import useFlush, {flushProps} from '@/composables/useFlush';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...flushProps,
    /**
     * Defines if the list should be displayed horizontally
     */
    horizontal: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the list should be numbered
     */
    numbered: {
        type: Boolean,
        default: false,
    },
});

const tag = computed(() => props.numbered ? 'ol' : 'ul');

const {classes} = useClasses(computed(() => [
    useFlush(props.flush, 'list-group-{0}').flushClass.value,
    props.horizontal ? 'list-group-horizontal' : undefined,
    props.numbered ? 'list-group-numbered' : undefined,
]));
</script>

<docs>
```vue
<ListGroup>
    <ListGroupItem>...</ListGroupItem>
    <ListGroupItem>...</ListGroupItem>
    <ListGroupItem>...</ListGroupItem>
</ListGroup>
```

## Imported Props

| Prop name | Description                            | Type    | Values | Default |
| --------- | -------------------------------------- | ------- | ------ | ------- |
| flush     | Use the flush variant of the component | boolean | -      | false   |
</docs>
