<template>
    <button
        class="btn-close"
        :disabled="disabled"
    />
</template>

<script lang="ts">
import {disabledProps} from '@/composables/useDisabled';
</script>

<script lang="ts" setup>
defineProps({
    ...disabledProps,
});
</script>

<docs>
```vue
<ButtonClose />
```

## Imported Props

| Prop name | Description            | Type    | Values | Default |
| --------- | ---------------------- | ------- | ------ | ------- |
| disabled  | Disables the component | boolean | -      | false   |
</docs>
