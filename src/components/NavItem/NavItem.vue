<template>
    <li class="nav-item">
        <!-- @slot Displays the content of the nav item -->
        <slot />
    </li>
</template>

<docs>
```vue
<NavItem>
    <RouterLink :to="home">Home</RouterLink>
</NavItem>
```
</docs>
