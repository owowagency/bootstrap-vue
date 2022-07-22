<template>
    <a
        class="nav-link"
        :class="classes"
        href="#"
    >
        <!-- @slot Displays the content of the nav link -->
        <slot />
    </a>
</template>

<script lang="ts">
import useActive, {activeProps} from '@/composables/useActive';
import useDisabled, {disabledProps} from '@/composables/useDisabled';
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...activeProps,
    ...disabledProps,
});

const {classes} = useClasses(computed(() => [
    useActive(props.active).activeClass.value,
    useDisabled(props.disabled).disabledClass.value,
]));
</script>

<docs>
```vue
<NavLink href="https://github.com/owowagency/bootstrap-vue">
    GitHub
</NavLink>
```


## Imported Props

| Prop name | Description             | Type    | Values | Default   |
| --------- | ----------------------- | ------- | ------ | --------- |
| active    | Adds the `active` class | boolean | -      | false     |
| disabled  | Disables the component  | boolean | -      | false     |
</docs>

