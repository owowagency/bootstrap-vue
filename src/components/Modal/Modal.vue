<template>
    <div
        :id="id"
        ref="modal"
        class="modal"
    >
        <div
            class="modal-dialog"
            :class="classes"
        >
            <div class="modal-content">
                <div
                    v-if="!!$slots.header || !!$slots.title || !!title || !hideCloseBtn"
                    :class="['modal-header', headerClass]"
                >
                    <!-- @slot Displays the header of the modal -->
                    <slot name="header">
                        <h5
                            v-if="!!$slots.title || !!title"
                            class="modal-title"
                        >
                            <!-- @slot Displays the header title of the modal -->
                            <slot name="title">
                                {{ title }}
                            </slot>
                        </h5>

                        <button
                            v-if="!hideCloseBtn"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            type="button"
                        />
                    </slot>
                </div>

                <div
                    v-if="$slots.default || body"
                    :class="{'modal-body': !noBody}"
                >
                    <!-- @slot Displays the body of the modal -->
                    <slot>
                        {{ body }}
                    </slot>
                </div>

                <div
                    v-if="$slots.footer"
                    class="modal-footer"
                >
                    <!-- @slot Displays the footer of the modal -->
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, onBeforeUnmount, ref} from 'vue';
import useSize, {sizeProps} from '@/composables/useSize';
import {idProps} from '@/composables/useId';
import useBootstrapEmits from '@/composables/useBootstrapEmits';
import useBootstrapInstance from '@/composables/useBootstrapInstance';
import useClasses from '@/composables/useClasses';

const modalEvents = ['show', 'shown', 'hide', 'hidden', 'hidePrevented'] as const;

type ModalEvent = typeof modalEvents[number];
</script>

<script lang="ts" setup>
const props = defineProps({
    /**
     * The body text of the modal
     */
    body: {
        type: String,
        default: undefined,
    },
    /**
     * The classes that will be forwarded to the header
     */
    headerClass: {
        type: [String, Array, Object],
        default: undefined,
    },
    /**
     * Defines if the close button should be hidden
     */
    hideCloseBtn: {
        type: Boolean,
        default: false,
    },
    ...idProps,
    /**
     * Defines if the modal should be vertically centered
     */
    modalCentered: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the modal should scrollable
     */
    modalScrollable: {
        type: Boolean,
        default: false,
    },
    /**
     * Defines if the `modal-body` class should be omitted
     */
    noBody: {
        type: Boolean,
        default: false,
    },
    ...sizeProps,
    /**
     * The title text of the modal
     */
    title: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits<{(event: ModalEvent): void}>();

const modal = ref<HTMLElement>();

useBootstrapEmits(
    modal,
    modalEvents,
    emit,
    'modal',
);

const {bsInstance: bsModal} = useBootstrapInstance(
    'Modal',
    modal,
);

const {classes} = useClasses(computed(() => [
    props.modalCentered ? 'modal-dialog-centered' : null,
    props.modalScrollable ? 'modal-dialog-scrollable' : null,
    props.size ? useSize(props.size, 'modal-{0}').sizeClass.value : null,
]));

onBeforeUnmount(() => {
    if (bsModal.value) {
        bsModal.value.hide();
    }
});

defineExpose({bsModal});
</script>

<docs>
```vue
<Modal hideCloseBtn>
    <form>
        ...
    </form>

    <template #footer>
        <Button>Submit</Button>
    </template>
</Modal>
```

## Imported Props

| Prop name | Description                   | Type                                       | Values | Default |
| --------- | ----------------------------- | ------------------------------------------ | ------ | ------- |
| id        | The id used for the component | string                                     | -      | `uuid`  |
| size      | The size of the component     | [Size](../../composables/useSize) (string) | -      | 'md'    |

<!-- TODO Auto-generate based on type? -->
## Events

| Name          | Args | Description                                                                                                       |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the `show` instance method is called                                            |
| shown         |      | This event is fired when the modal has been made visible to the user                                              |
| hide          |      | This event is fired immediately when the `hide` instance method has been called                                   |
| hidden        |      | This event is fired when the modal has finished being hidden from the user                                        |
| hidePrevented |      | This event is fired when the modal is shown, its backdrop is static and a click outside of the modal is performed |
</docs>
