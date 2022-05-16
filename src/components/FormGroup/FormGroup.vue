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
        type: [Array, String],
        default: () => [],
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
        type: [Array, String],
        default: () => [],
    },
});

const emit = defineEmits(['update:modelValue']);

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
