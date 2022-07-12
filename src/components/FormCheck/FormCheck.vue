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
            <!-- @slot Displays content inside the label -->
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
    /**
     * Adds the `form-check-inline` class
     */
    inline: {
        type: Boolean,
        default: false,
    },
    /**
     * The classes that will be forwarded to the input
     */
    inputClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The label to display
     */
    label: {
        type: String,
        default: undefined,
    },
    /**
     * The model value
     */
    modelValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    /**
     * The name of the input
     */
    name: {
        type: String,
        default: undefined,
    },
    /**
     * Display the check as a switch by adding the `form-switch` class
     */
    switch: {
        type: Boolean,
        default: false,
    },
    /**
     * The type of the input
     * @values 'checkbox'|'radio'
     */
    type: typeProp,
    /**
     * The value of the input
     */
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

<docs>
```vue
<FormCheck
    v-model="check"
    label="Check me"
    switch
/>
```

## Imported Props

| Prop name | Description                   | Type    | Values | Default |
| --------- | ----------------------------- | ------- | ------ | ------- |
| disabled  | Disables the component        | boolean | -      | false   |
| id        | The id used for the component | string  | -      | `uuid`  |
</docs>
