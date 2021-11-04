<template>
    <button
        class="btn-close"
        :disabled="disabled"
    />
</template>

<script lang="ts" setup>
import {defineProps} from 'vue';
import {disabledProps} from '@/composables/useDisabled';

defineProps({
    ...disabledProps,
});
</script>
