<template>
    <div
        ref="alert"
        class="alert"
        :class="classes"
    >
        <!-- @slot Displays content inside the alert -->
        <slot />
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';
import useVariant from '@/composables/useVariant';
import {variantProps} from '@/composables/useVariant';

const alertEvents = ['close', 'closed'] as const;

type AlertEvent = typeof alertEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps(variantProps);

const emit = defineEmits<{(event: AlertEvent): void}>();

const alert = ref<HTMLElement>();

useBootstrapEmits(
    alert,
    alertEvents,
    emit,
    'alert',
);

const {bsInstance: bsAlert} = useBootstrapInstance(
    'Alert',
    alert,
);

const {classes} = useClasses(computed(() => [
    useVariant(props.variant, 'alert-{0}').variantClass.value,
]));

defineExpose({bsAlert});
</script>

<docs>
```vue
<Alert variant="danger">
    Something went wrong!
</Alert>
```

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

<!-- TODO Auto-generate based on type? -->
## Events

| Name   | Args | Description                                                             |
| ------ | ---- | ----------------------------------------------------------------------- |
| close  |      | Fires immediately when the `close` instance method is called            |
| closed |      | Fired when the alert has been closed and CSS transitions have completed |
</docs>
