<template>
    <div
        class="d-inline-block"
        data-bs-toggle="collapse"
        :data-bs-target="`#${id}`"
    >
        <slot
            name="toggle"
        />
    </div>

    <div
        :id="id"
        class="collapse"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import {idProps} from '../../composables/useId';
</script>

<script lang="ts" setup>

defineProps({
    ...idProps,
});
</script>
