<template>
    <div
        class="form-check"
        :class="{'form-switch': isSwitch, 'form-check-inline': inline}"
    >
        <input
            :id="id"
            v-model="checked"
            class="form-check-input"
            :disabled="disabled"
            :type="type"
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
import {PropType, computed} from 'vue';
import {disabledProps} from '../../composables/useDisabled';
import {idProps} from '../../composables/useId';

export const types = ['checkbox', 'radio'] as const;

export type Type = typeof types[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    ...disabledProps,
    ...idProps,
    inline: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: undefined,
    },
    modelValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    switch: {
        type: Boolean,
        default: false,
    },
    type: {
        type: String as PropType<Type>,
        default: 'checkbox',
        validator: (t: string): Boolean => types.includes(t),
    },
    value: {
        type: [String, Number],
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const checked = computed({
    get(): Boolean {
        return props.value !== undefined
            ? props.value === props.modelValue
            : !!props.modelValue;
    },
    set(v: Boolean) {
        let value: String | Number | Boolean | undefined = v;

        if (props.value) {
            value = v ? props.value : undefined;
        }

        emit('update:modelValue', value);
    },
});

// Required to prevent the use of a reserved word.
const isSwitch = computed(() => props.switch);
</script>
