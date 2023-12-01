import {tooltipFallbackPlacements, tooltipPlacements} from '@/composables/useTooltipPlacement';
import Btn from '@/components/Button';
import Tooltip from '.';
import {triggers} from '@/composables/useTrigger';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        fallbackPlacements: {
            control: {type: 'check'},
            options: tooltipFallbackPlacements,
        },
        placement: {
            control: {type: 'select'},
            options: tooltipPlacements,
        },
        tag: {
            control: {type: 'text'},
        },
        title: {
            control: {type: 'text'},
        },
        trigger: {
            control: {type: 'check'},
            options: triggers,
        },
    },
};

const template = (args) => ({
    components: {Btn, Tooltip},
    setup: () => ({args}),
    template: `
        <div class="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0">
            <Tooltip v-bind="args" class="btn btn-primary">
                Hover me
            </Tooltip>
        </div>
    `,
});

export const Default = template.bind({});

Default.args = {
    fallbackPlacements: ['top', 'right', 'bottom', 'left'],
    placement: 'top',
    tag: 'button',
    title: 'I am the tooltip title',
    trigger: ['hover', 'focus'],
};
