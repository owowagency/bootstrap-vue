<template>
    <div :class="classes">
        <!-- @slot Displays content inside the button group -->
        <slot />
    </div>
</template>

<script lang="ts">
import useSize, {sizeProps} from '@/composables/useSize';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...sizeProps,
    /**
     * Stacks the buttons vertically
     */
    vertical: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses(computed(() => [
    computed(() => props.vertical ? 'btn-group-vertical' : 'btn-group').value,
    useSize(props.size, 'btn-group-{0}').sizeClass.value,
]));
</script>

<docs>
```vue
<ButtonGroup vertical>
    <Button>
        Top
    </Button>

    <Button>
        Middle
    </Button>

    <Button>
        Bottom
    </Button>
</ButtonGroup>
```

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |
</docs>
