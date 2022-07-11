<template>
    <div
        :id="id"
        class="accordion"
        :class="classes"
    >
        <!--
        @slot Displays the content of the accordion
        @binding parent-id The id of the parent accordion
        -->
        <slot :parent-id="id" />
    </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import {flushProps} from '@/composables/useFlush';
import {idProps} from '@/composables/useId';
import useClasses from '@/composables/useClasses';
import useFlush from '@/composables/useFlush';
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

<docs>
```vue
<Accordion>
    <AccordionItem header="Header">
        Content
    </AccordionItem>
</Accordion>
```
</docs>
