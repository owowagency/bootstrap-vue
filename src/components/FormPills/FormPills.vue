<template>
    <ul class="form-control list-unstyled d-flex flex-wrap">
        <li class="d-inline-flex mw-100 bg-primary">
            <div class="text-truncate">
                Some pill
            </div>

            <div>
                X
            </div>
        </li>

        <li class="d-inline-flex mw-100 bg-danger">
            <div class="text-truncate">
                Some pill
            </div>

            <div>
                X
            </div>
        </li>

        <li class="d-inline-flex mw-100 bg-warning">
            <div class="text-truncate">
                A very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very very long pill
            </div>

            <div>
                X
            </div>
        </li>

        <li class="bg-info mw-100">
            <div class="h-0 overflow-hidden">
                {{ value }}
            </div>

            <input
                v-model="value"
                class="border-0 w-100 outline-0 p-0"
                type="text"
            >
        </li>
    </ul>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const value = ref('');
</script>


<style scoped>
.form-pill {
    /* TODO: Should come from input variables */
    margin-right: 6px;
}

.form-pill .btn-close {
    height: .5em;
    width: .5em;
    color: inherit;
}

.h-0 {
    height: 0 !important;
}

.outline-0 {
    outline: 0;
}
</style>
