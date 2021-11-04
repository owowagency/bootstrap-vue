<template>
    <div class="card">
        <div
            v-if="!!$slots.header || !!header"
            class="card-header"
        >
            <slot name="header">
                {{ header }}
            </slot>
        </div>

        <div :class="{'card-body': !noBody}">
            <slot name="default">
                <h5
                    v-if="title"
                    class="card-title"
                >
                    {{ title }}
                </h5>

                <h6
                    v-if="subtitle"
                    class="card-subtitle"
                >
                    {{ subtitle }}
                </h6>

                <div
                    v-if="text"
                    class="card-text"
                >
                    {{ text }}
                </div>
            </slot>
        </div>

        <div
            v-if="!!$slots.footer || footer"
            class="card-footer"
        >
            <slot name="footer">
                {{ footer }}
            </slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    footer: {
        type: String,
        default: undefined,
    },
    header: {
        type: String,
        default: undefined,
    },
    noBody: {
        type: Boolean,
        default: false,
    },
    subtitle: {
        type: String,
        default: undefined,
    },
    text: {
        type: String,
        default: undefined,
    },
    title: {
        type: String,
        default: undefined,
    },
});
</script>
