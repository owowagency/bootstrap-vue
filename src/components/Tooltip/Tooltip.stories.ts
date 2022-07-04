import {tooltipFallbackPlacements, tooltipPlacements} from '@/composables/useTooltipPlacement';
import Btn from '@/components/Button';
import Tooltip from '.';
import {triggers} from '@/composables/useTrigger';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        fallbackPlacement: {
            control: {type: 'check'},
            options: tooltipFallbackPlacements,
        },
        placement: {
            control: {type: 'select'},
            options: tooltipPlacements,
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
            <Tooltip v-bind="args">
                <Btn>
                    Hover me
                </Btn>
            </Tooltip>
        </div>
    `,
});

export const Default = template.bind({});

Default.args = {
    fallbackPlacement: ['top', 'right', 'bottom', 'left'],
    placement: 'top',
    title: 'I am the tooltip title',
    trigger: ['hover', 'focus'],
};
