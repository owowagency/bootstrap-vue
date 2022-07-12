<template>
    <div
        :id="id"
        ref="carousel"
        class="carousel slide"
        :class="classes"
        :data-bs-interval="interval"
        data-bs-ride="carousel"
    >
        <div class="carousel-inner">
            <!--
            @slot Displays content inside the carousel
            @binding {array} slides The `CarouselSlide` list
             -->
            <slot
                name="slides"
                :slides="slides"
            >
                <div
                    v-for="(slide, index) in slides"
                    :key="`slide-${index}`"
                    class="carousel-item"
                    :class="{active: index === activeIndex}"
                    :data-bs-interval="slide.interval"
                >
                    <!--
                    @slot Displays content inside the slide
                    @binding {int} index The index of the slide
                    @binding {object} slide The `CarouselSlide` object
                    -->
                    <slot
                        :index="index"
                        :slide="slide"
                    >
                        <img
                            v-if="slide.image"
                            :src="slide.image"
                            class="d-block w-100"
                        >

                        <!--
                        @slot Display the caption of the carousel
                        @binding {string} description The description of the slide
                        @binding {string} title The title of the slide
                        -->
                        <slot
                            name="caption"
                            :description="slide.description"
                            :title="slide.title"
                        >
                            <div
                                v-if="slide.title || slide.description"
                                class="carousel-caption d-none d-md-block"
                            >
                                <h5 v-if="slide.title">
                                    {{ slide.title }}
                                </h5>

                                <p v-if="slide.description">
                                    {{ slide.description }}
                                </p>
                            </div>
                        </slot>
                    </slot>
                </div>
            </slot>
        </div>

        <div v-if="!hideControls">
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

        <div
            v-if="!hideIndicators"
            class="carousel-indicators"
        >
            <button
                v-for="(_, index) in slides"
                :key="`slide-indicator-${index}`"
                :class="{active: index === activeIndex}"
                :data-bs-target="`#${id}`"
                :data-bs-slide-to="index"
            />
        </div>
    </div>
</template>

<script lang="ts">
import {PropType, computed, ref} from 'vue';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const carouselEvents = ['slid', 'slide'] as const;

type CarouselEvent = typeof carouselEvents[number];

export interface CarouselSlide {
    active?: boolean;
    description?: string;
    image?: string;
    interval?: number;
    title?: string;
}
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * Use dark mode for the controls
     */
    dark: {
        type: Boolean,
        default: false,
    },
    /**
     * Use a fade transition for the slides
     */
    fade: {
        type: Boolean,
        default: false,
    },
    /**
     * Hide the controls
     */
    hideControls: {
        type: Boolean,
        default: false,
    },
    /**
     * Hide the indicators
     */
    hideIndicators: {
        type: Boolean,
        default: false,
    },
    ...idProps,
    /**
     * The interval of the carousel in milliseconds
     */
    interval: {
        type: Number,
        default: 5000,
    },
    /**
     * The slides of the carousel
     */
    slides: {
        type: Array as PropType<CarouselSlide[]>,
        default: () => [],
    },
});

const emit = defineEmits<{(event: CarouselEvent): void}>();

const carousel = ref<HTMLElement>();

const activeIndex = computed(() => {
    const activeSlideIndex = props.slides.findIndex((slide: CarouselSlide) => slide.active);

    return activeSlideIndex > -1 ? activeSlideIndex : 0;
});

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

<docs>
```vue
<Carousel
    :slides="[CarouselSlide]"
    interval="10000"
    hideControls
/>
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |
</docs>
