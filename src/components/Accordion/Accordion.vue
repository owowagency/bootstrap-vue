<template>
    <div
        :id="id"
        class="accordion"
        :class="classes"
    >
        <!--
        @slot Displays the content of the accordion
        @binding {string} parent-id The id of the parent accordion
        -->
        <slot :parent-id="id" />
    </div>
</template>

<script lang="ts">
import useFlush, {flushProps} from '@/composables/useFlush';
import {computed} from 'vue';
import {idProps} from '@/composables/useId';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...flushProps,
    ...idProps,
});

const {classes} = useClasses(computed(() => [
    useFlush(props.flush, 'accordion-{0}').flushClass.value,
]));
</script>

<!--
<docs>
```vue
<Accordion>
    <AccordionItem header="Header">
        Content
    </AccordionItem>
</Accordion>
```

## Imported Props

| Prop name | Description                            | Type    | Values | Default |
| --------- | -------------------------------------- | ------- | ------ | ------- |
| flush     | Use the flush variant of the component | boolean | -      | false   |
| id        | The id used for the component          | string  | -      | `uuid`  |
</docs>
-->
