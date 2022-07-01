import Btn from '@/components/Button';
import Tooltip from '.';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
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
    title: 'I am the tooltip title',
};
