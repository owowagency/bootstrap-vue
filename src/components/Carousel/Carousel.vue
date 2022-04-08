<template>
    <div
        :id="id"
        ref="carousel"
        class="carousel slide"
        :class="classes"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <slot>
                Default
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, ref} from 'vue';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const carouselEvents = ['slide', 'slide'] as const;

type CarouselEvent = typeof carouselEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    dark: {
        type: Boolean,
        default: false,
    },
    fade: {
        type: Boolean,
        default: false,
    },
    ...idProps,
});

const emit = defineEmits<{(event: CarouselEvent): void}>();

const carousel = ref<HTMLElement>();

useBootstrapEmits(
    carousel,
    carouselEvents,
    emit,
    'carousel',
);

const {bsInstance: bsCarousel} = useBootstrapInstance(
    'Carousel',
    carousel,
);

const {classes} = useClasses(computed(() => [
    props.dark ? 'carousel-dark' : null,
    props.fade ? 'carousel-fade' : null,
]));

defineExpose({bsCarousel});
</script>
