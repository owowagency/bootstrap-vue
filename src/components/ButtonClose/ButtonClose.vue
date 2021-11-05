<template>
    <button
        class="btn-close"
        :disabled="disabled"
    />
</template>

<script lang="ts" setup>
import {disabledProps} from '../../composables/useDisabled';

defineProps({
    ...disabledProps,
});
</script>
