<template>
    <nav>
        <ol class="breadcrumb">
            <!-- @slot Displays content inside the breadcrumb -->
            <slot />
        </ol>
    </nav>
</template>

<docs>
```vue
<Breadcrumb>
    <BreadcrumbItem>
        Home
    </BreadcrumbItem>

    <BreadcrumbItem active>
        Products
    </BreadcrumbItem>
</Breadcrumb>
```
</docs>
