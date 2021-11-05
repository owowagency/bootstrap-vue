<template>
    <li>
        <hr
            v-if="divider"
            class="dropdown-divider"
        >

        <h6
            v-else-if="header"
            class="dropdown-header"
        >
            {{ label }}
        </h6>

        <a
            v-else
            class="dropdown-item"
            :class="{active: active}"
            href="#"
        >
            {{ label }}
        </a>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    divider: {
        type: Boolean,
        default: false,
    },
    header: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: undefined,
    },
});
</script>
