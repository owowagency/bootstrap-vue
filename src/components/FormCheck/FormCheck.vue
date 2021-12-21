<template>
    <div
        class="form-check"
        :class="{'form-switch': isSwitch, 'form-check-inline': inline}"
    >
        <input
            :id="id"
            v-model="checked"
            class="form-check-input"
            :class="inputClass"
            :disabled="disabled"
            :name="name"
            :type="type"
            :value="value"
        >

        <label
            v-if="$slots.default || label"
            class="form-check-label"
            :for="id"
        >
            <slot>
                {{ label }}
            </slot>
        </label>
    </div>
</template>

<script lang="ts">
import {computed} from 'vue';
import {disabledProps} from '@/composables/useDisabled';
import {idProps} from '@/composables/useId';
import {typeProp} from '@/components/FormCheck/type';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...disabledProps,
    ...idProps,
    inline: {
        type: Boolean,
        default: false,
    },
    inputClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    label: {
        type: String,
        default: undefined,
    },
    modelValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    name: {
        type: String,
        default: undefined,
    },
    switch: {
        type: Boolean,
        default: false,
    },
    type: typeProp,
    value: {
        type: [String, Number],
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const checked = computed({
    get: () => props.modelValue,
    set(v: string | number | boolean | undefined) {
        let value: string | number | boolean | undefined = v;

        if (props.value) {
            value = v ? props.value : undefined;
        }

        emit('update:modelValue', value);
    },
});

// Required to prevent the use of a reserved word.
const isSwitch = computed(() => props.switch);
</script>
