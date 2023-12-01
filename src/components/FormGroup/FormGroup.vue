<template>
    <div>
        <label
            v-if="!!$slots.label || label || description"
            class="form-label"
            :class="labelClass"
            :for="id"
        >
            <!--
            @slot Displays content inside the label
            @binding {string} label The text of the label
            -->
            <slot
                name="label"
                :label="label"
            >
                {{ label }}
            </slot>

            <div
                v-if="!!description"
                class="form-text"
            >
                {{ description }}
            </div>
        </label>

        <!--
        @slot Displays the input
        @binding {string} id The id of the input
        @binding {boolean} is-invalid Describes if the input is invalid
        @binding {boolean} is-valid Describes if the input is valid
        -->
        <slot
            :id="id"
            :is-invalid="isInvalid"
            :is-valid="isValid"
        >
            <FormControl
                v-bind="propsFormControl"
                :id="id"
                :class="validityClass"
                @update:model-value="emit('update:modelValue', $event)"
            />
        </slot>

        <template v-if="isInvalid">
            <div
                v-for="feedback of invalidFeedback"
                :key="feedback"
                class="invalid-feedback"
            >
                {{ feedback }}
            </div>
        </template>

        <template v-if="isValid">
            <div
                v-for="feedback of validFeedback"
                :key="feedback"
                class="valid-feedback"
            >
                {{ feedback }}
            </div>
        </template>

        <div
            v-if="helpText"
            class="form-text"
        >
            {{ helpText }}
        </div>
    </div>
</template>

<script lang="ts">
import FormControl from '@/components/FormControl';
import {computed} from 'vue';
import extractKeysFrom from '@/library/extractKeysFrom';
import {formControlProps} from '@/composables/useFormControl';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * The description of the form group
     * *Displayed between label and input*
     */
    description: {
        type: String,
        default: undefined,
    },
    /**
     * The help text of the form group
     * *Displayed under input*
     */
    helpText: {
        type: String,
        default: undefined,
    },
    ...idProps,
    ...formControlProps,
    /**
     * The invalid feedback of the form group
     * *Displayed between input and helpText*
     */
    invalidFeedback: {
        type: [Array, String],
        default: () => [],
    },
    /**
     * The label to display
     */
    label: {
        type: String,
        default: undefined,
    },
    /**
     * The classes that will be forwarded to the label
     */
    labelClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * The valid feedback of the form group
     * *Displayed between input and helpText*
     */
    validFeedback: {
        type: [Array, String],
        default: () => [],
    },
});

const emit = defineEmits([
    /**
     * Fired when the model value is updated
     * @param {any} value The new value
     */
    'update:modelValue',
]);

const propsFormControl = extractKeysFrom(Object.keys(formControlProps), props);

const invalidFeedback = computed(() => [props.invalidFeedback].flat().filter(f => !!f));

const isInvalid = computed(() => !!invalidFeedback.value.length);

const validFeedback = computed(() => [props.validFeedback].flat().filter(f => !!f));

const isValid = computed(() => !!validFeedback.value.length);

const validityClass = computed(() => [
    isInvalid.value ? 'is-invalid' : undefined,
    isValid.value ? 'is-valid' : undefined,
]);
</script>

<docs>
```vue
<FormGroup
    v-model="username"
    name="username"
    label="Username"
/>
```

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| id          | The id used for the component                | string                                            | -      | `uuid`  |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the `form-control-plaintext` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |
</docs>
