<template>
    <div
        :id="id"
        ref="carousel"
        class="carousel slide"
        :class="classes"
        :data-bs-interval="interval"
        data-bs-ride="carousel"
    >
        <div
            v-if="indicators"
            class="carousel-indicators"
        >
            <button
                v-for="(_, index) in slides"
                :key="`slide-indicator-${index}`"
                :class="{active: !index}"
                :data-bs-target="`#${id}`"
                :data-bs-slide-to="index"
            />
        </div>

        <div class="carousel-inner">
            <div
                v-for="(slide, index) in slides"
                :key="`slide-${index}`"
                class="carousel-item"
                :class="{active: !index}"
            >
                <slot :slide="slide">
                    <img
                        :src="slide"
                        class="d-block w-100"
                    >
                </slot>
            </div>
        </div>

        <div v-if="controls">
            <button
                class="carousel-control-prev"
                :data-bs-target="`#${id}`"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" />
            </button>

            <button
                class="carousel-control-next"
                :data-bs-target="`#${id}`"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" />
            </button>
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
    controls: {
        type: Boolean,
        default: true,
    },
    dark: {
        type: Boolean,
        default: false,
    },
    fade: {
        type: Boolean,
        default: false,
    },
    ...idProps,
    indicators: {
        type: Boolean,
        default: true,
    },
    interval: {
        type: Number,
        default: 5000,
    },
    slides: {
        type: Array,
        default: () => [],
    },
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
