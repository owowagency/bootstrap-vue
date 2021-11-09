import Accordion from '.';
import AccordionItem from '../AccordionItem';

export default {
    title: 'Components/Accordion',
    component: Accordion,
};

const template = (args) => ({
    components: {Accordion, AccordionItem},
    setup: () => ({args}),
    template: `
        <Accordion v-bind="args">
            <template #default="{parentId}">
                <AccordionItem
                    header="Accordion Item #1"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>

                <AccordionItem
                    header="Accordion Item #2"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>
            </template>
        </Accordion>
    `,
});

export const Default = template.bind({});

export const Flush = template.bind({});

Flush.args = {
    flush: true,
};

export const AlwaysOpen = template.bind({});

AlwaysOpen.args = {
    alwaysOpen: true,
};
