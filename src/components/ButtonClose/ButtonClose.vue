<template>
    <button
        class="btn-close"
        :disabled="disabled"
    />
</template>

<script lang="ts">
import {disabledProps} from '../../composables/useDisabled';
</script>

<script lang="ts" setup>
defineProps({
    ...disabledProps,
});
</script>
