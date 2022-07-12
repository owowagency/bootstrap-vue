<template>
    <FormCheck
        v-for="(item, index) of items"
        :key="item.value"
        :disabled="disabled"
        :label="item.label || item.value"
        :model-value="getValue(index)"
        :name="name"
        :type="type"
        :switch="isSwitch"
        :value="item.value"
        @update:model-value="setValue($event, index)"
    />
</template>

<script lang="ts">
import FormCheck, {Type, typeProp} from '@/components/FormCheck';
import {PropType, computed} from 'vue';
import {disabledProps} from '@/composables/useDisabled';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
interface Item {
    label?: string;
    value: unknown;
}

const props = defineProps({
    ...disabledProps,
    /**
     * Display the checks as a switch by adding the `form-switch` class
     */
    switch: {
        type: Boolean,
        default: false,
    },
    /**
     * The items to display in the group
     */
    items: {
        type: Array as PropType<Item[]>,
        required: true,
    },
    /**
     * The type of the input
     * @values 'checkbox'|'radio'
     */
    type: typeProp,
    // Put `modelValue` after `type` so it will be available in `default`.
    /**
     * The model value
     */
    modelValue: {
        type: [Array, String, Number, undefined],
        default: (props: {type: Type}) => props.type === 'checkbox' ? [] : undefined,
    },
});

const name = props.type === 'checkbox' ? undefined : idProps.id.default();

const emit = defineEmits(['update:modelValue']);

// Required to prevent the use of reserved word `switch` in template.
const isSwitch = computed(() => props.switch);

const value = computed<unknown[]|string|number|undefined>({
    get: () => props.modelValue,
    set: (v) => emit('update:modelValue', v),
});

const getValue = (i) => props.type === 'checkbox' ? !!value.value[i] : value.value;

const setValue = (v, i) => {
    if (props.type === 'checkbox') {
        const clone = [...value.value as unknown[]];

        clone[i] = v;

        value.value = clone;
    } else {
        value.value = v;
    }
};
</script>

<docs>
```vue
<FormCheckGroup
    v-model="checks"
    :items="[Item]"
    type="checkbox"
/>
```

## Imported Props

| Prop name | Description            | Type    | Values | Default |
| --------- | ---------------------- | ------- | ------ | ------- |
| disabled  | Disables the component | boolean | -      | false   |
</docs>
