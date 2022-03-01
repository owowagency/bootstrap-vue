import Btn from '@/components/Button';
import Card from '@/components/Card';
import Collapse from '.';

export default {
    title: 'Components/Collapse',
    component: Collapse,
};

const template = (args) => ({
    components: {Btn, Card, Collapse},
    setup: () => ({args}),
    template: `
        <Collapse v-bind="args">
            <template #toggle-content="{id}">
                <Btn
                    class="mb-2"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + id"
                >
                    Open me
                </Btn>
            </template>

            <Card text="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger." />
        </Collapse>
    `,
});

export const Default = template.bind({});

