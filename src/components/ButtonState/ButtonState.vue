<template>
    <Button class="">
        <span
            v-if="error || loading || success"
            class="me-2"
        >
            <Spinner
                v-if="loading"
                size="sm"
                variant=""
            />

            <span
                v-if="success"
                class="button-state-icon button-state-icon-error"
            />

            <span
                v-if="error"
                class="button-state-icon button-state-icon-success"
            />
        </span>

        <slot />
    </Button>
</template>

<script lang="ts" setup>
import Button from '../Button';
import Spinner from '../Spinner';

defineProps({
    error: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    success: {
        type: Boolean,
        default: false,
    },
});
</script>
