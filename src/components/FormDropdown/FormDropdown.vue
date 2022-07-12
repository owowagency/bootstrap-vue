<template>
    <Dropdown
        class="form-dropdown"
        v-bind="propsDropdown"
        @click:item="emit('update:modelValue', $event)"
    >
        <template #dropdownToggle>
            <!-- @slot Displays the dropdown toggle -->
            <slot name="dropdownToggle">
                <div
                    class="form-select"
                    data-bs-toggle="dropdown"
                    :class="classes"
                >
                    {{ label }}
                </div>
            </slot>
        </template>

        <template #prepend>
            <!-- @slot Displays content when there are no options -->
            <slot
                v-if="items.length === 0"
                name="noOptions"
            >
                <DropdownMenuItem
                    class="pe-none"
                    label="No options"
                />
            </slot>

            <!-- @slot Prepends the dropdown options -->
            <slot name="prepend" />
        </template>

        <!-- Rollup does not dynamically overriding child slots. See issue #35
        <template
            v-for="slotName in dropdownMenuSlots"
            #[slotName]="slotScope"
        >
            <slot
                :name="slotName"
                v-bind="slotScope"
            />
        </template> -->

        <template #items="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="items"
                v-bind="slotScope"
            />
        </template>

        <template #item="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="item"
                v-bind="slotScope"
            />
        </template>

        <template #append="slotScope">
            <!-- @slot *Forwarded to child* -->
            <slot
                name="append"
                v-bind="slotScope"
            />
        </template>
    </Dropdown>
</template>

<script lang="ts">
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';
import Dropdown from '@/components/Dropdown';
import DropdownMenuItem from '@/components/DropdownMenuItem';
import {computed} from 'vue';
import {dropdownProps} from '@/composables/useDropdown';
import extractKeysFrom from '@/library/extractKeysFrom';
import useClasses from '@/composables/useClasses';

const {disabled: disabledProp, size: sizeProp} = formSelectProps;
</script>

<script lang="ts" setup>
const props = defineProps({
    ...dropdownProps,
    /**
     * Disables the component
     */
    disabled: disabledProp,
    /**
     * The key that is used to get the label from a given item
     */
    labelKey: {
        type: String,
        default: 'label',
    },
    /**
     * The classes that will be forwarded to the menu
     */
    menuClass: {
        type: String,
        default: 'w-100',
    },
    /**
     * The model value
     */
    modelValue: {
        type: Object,
        default: undefined,
    },
    /**
     * The placeholder of the dropdown
     */
    placeholder: {
        type: String,
        default: 'Select',
    },
    size: sizeProp,
    /**
     * The classes that will be forwarded to the toggle
     */
    toggleClass: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const propsDropdown = extractKeysFrom(Object.keys(dropdownProps), props);

const label = computed(() => {
    if (!props.modelValue) {
        return props.placeholder;
    }

    return props.modelValue[props.labelKey];
});

const {classes} = useClasses(computed(() => [
    ...useFormSelect(props).classes.value,
    props.toggleClass,
]));

// Rollup does not like dynamically overriding slots so this is not used for now.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dropdownMenuSlots = [
    'items',
    'item',
    'append',
];
</script>

<docs>
```vue
<FormDropdown :items="[Item]" />
```

## Imported Props

| Prop name | Description                                    | Type                                             | Values | Default   |
| --------- | ---------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| items     | The items of the dropdown menu                 | [Item[]](../../composables/useDropdownItems)     | -      | () => []  |
| menuClass | The classes that will be forwarded to the menu | `string`\|`array`\|`object`                      | -      | undefined |
| size      | The size of the component                      | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component                   | [Variant](../../composables/useVariant) (string) | -      | 'primary' |
</docs>
