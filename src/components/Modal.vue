<template>
    <div
        :id="id"
        ref="modal"
        class="modal"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div
                    v-if="!!$slots.header || !!$slots.title || !!title"
                    class="modal-header"
                >
                    <slot name="header">
                        <h5 class="modal-title">
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </h5>

                        <button
                            class="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        />
                    </slot>
                </div>

                <div
                    v-if="$slots.default || text"
                    :class="{'modal-body': !noBody}"
                >
                    <slot>
                        {{ text }}
                    </slot>
                </div>

                <div
                    v-if="$slots.footer"
                    class="modal-footer"
                >
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import * as bootstrap from 'bootstrap';
import {defineProps, onBeforeUnmount, onMounted, ref} from 'vue';
import {idProps} from '../composables/useId';

defineProps({
    ...idProps,
    noBody: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: undefined,
    },
    title: {
        type: String,
        default: undefined,
    },
});

const modal = ref<HTMLElement>();

const bsModal = ref<bootstrap.Modal>();

onMounted(() => {
    bsModal.value = bootstrap.Modal.getInstance(modal.value);
});

onBeforeUnmount(() => {
    if (bsModal.value) {
        bsModal.value.dispose();
    }
});
</script>
