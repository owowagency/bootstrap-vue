import Btn from '@/components/Button';
import Tooltip from '.';
import {tooltipPlacements} from '@/composables/useTooltipPlacement';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        placement: {
            control: {type: 'select'},
            options: tooltipPlacements,
        },
        title: {
            control: {type: 'text'},
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
    placement: 'top',
    title: 'I am the tooltip title',
};
