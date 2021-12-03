<template>
    <InputGroup
        :size="props.size"
    >
        <template #append>
            <Button @click="toggleType">
                toggle preview
            </Button>
        </template>

        <FormControl
            v-model="value"
            :type="type"
        />
    </InputGroup>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import useSize, {sizeProps} from '@/composables/useSize';
import Button from '@/components/Button';
import FormControl from '@/components/FormControl';
import InputGroup from '@/components/InputGroup';
import useClasses from '@/composables/useClasses';
</script>

<script lang="ts" setup>
const props = defineProps({
    ...sizeProps,
});

const type = ref<'password'|'text'>('password');

const value = ref('');

const toggleType = () => type.value = type.value === 'password' ? 'text' : 'password';
</script>
