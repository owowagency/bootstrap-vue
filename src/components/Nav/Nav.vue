<template>
    <nav
        class="nav"
        :class="classes"
    >
        <!-- @slot Displays the content of the nav -->
        <slot />
    </nav>
</template>

<script lang="ts" setup>
import {computed} from 'vue';
import useClasses from '@/composables/useClasses';

const props = defineProps({
    /**
     * Defines if the `nav-fill` class should be used
     */
    fill: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `nav-justified` class should be used
     */
    justified: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `nav-pills` class should be used
     */
    pills: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `nav-tabs` class should be used
     */
    tabs: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `flex-column` class should be used
     * *Displays items vertically*
     */
    vertical: {
        type: Boolean,
        default: false,
    },
});

const {classes} = useClasses(computed(() => [
    props.fill ? 'nav-fill' : undefined,
    props.justified ? 'nav-justified' : undefined,
    props.pills ? 'nav-pills' : undefined,
    props.tabs ? 'nav-tabs' : undefined,
    props.vertical ? 'flex-column' : undefined,
]));
</script>

<docs>
```vue
<Nav fill tabs>
    <NavItem>Home</NavItem>
    <NavItem>Docs</NavItem>
    <NavItem>About</NavItem>
</Nav>
```
</docs>
