<template>
    <div>
        <label
            v-if="label || description"
            class="form-label"
            :class="labelClass"
            :for="id"
        >
            {{ label }}

            <div
                v-if="!!description"
                class="form-text"
            >
                {{ description }}
            </div>
        </label>

        <slot
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

        <div
            v-if="isInvalid"
            class="invalid-feedback"
        >
            {{ invalidFeedback }}
        </div>

        <div
            v-if="isValid"
            class="valid-feedback"
        >
            {{ validFeedback }}
        </div>

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
import {formControlProps} from '@/composables/useFormControl';
import {idProps} from '@/composables/useId';
</script>

<script lang="ts" setup>
const props = defineProps({
    description: {
        type: String,
        default: undefined,
    },
    helpText: {
        type: String,
        default: undefined,
    },
    ...idProps,
    ...formControlProps,
    invalidFeedback: {
        type: String,
        default: undefined,
    },
    label: {
        type: String,
        default: undefined,
    },
    labelClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    validFeedback: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:modelValue']);

const propsFormControl = computed(() => {
    const properties = {};

    Object.keys(formControlProps)
        .forEach(k => properties[k] = props[k]);

    return properties;
});

const isInvalid = computed(() => !!props.invalidFeedback);

const isValid = computed(() => !!props.validFeedback);

const validityClass = computed(() => [
    isInvalid.value ? 'is-invalid' : undefined,
    isValid.value ? 'is-valid' : undefined,
]);
</script>
