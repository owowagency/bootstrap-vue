<template>
    <div :class="classes">
        <!-- @slot Displays content inside the container -->
        <slot />
    </div>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';

const props = defineProps({
    /**
     * Uses the `container-fluid` class
     */
    fluid: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses(computed(() => [
    `container${props.fluid ? '-fluid' : ''}`,
]));
</script>

<docs>
```vue
<Container>
    <Row>
        <Col>
            <h1>Hello World</h1>
        </Col>
    </Row>
</Container>
```
</docs>
