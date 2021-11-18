import ListGroup from '.';
import ListGroupItem from '@/components/ListGroupItem';
import {variants} from '@/composables/useVariant';

export default {
    title: 'Components/List group',
    component: ListGroup,
    argTypes: {},
};

const template = (args) => ({
    components: {ListGroup, ListGroupItem},
    setup: () => ({args}),
    template: `
        <ListGroup v-bind="args">
            <ListGroupItem active>An active item</ListGroupItem>
            <ListGroupItem>A second item</ListGroupItem>
            <ListGroupItem disabled>A disabled item</ListGroupItem>
            <ListGroupItem>A fourth item</ListGroupItem>
            <!-- An action has 100% width. This does not work well with horizontal -->
            <ListGroupItem :tag="args.horizontal ? 'div' : 'a'">An action item</ListGroupItem>
            <ListGroupItem>And a sixth one</ListGroupItem>
        </ListGroup>
    `,
});

export const Default = template.bind({});

export const Flush = template.bind({});

Flush.args = {
    flush: true,
};

export const Numbered = template.bind({});

Numbered.args = {
    numbered: true,
};

export const Horizontal = template.bind({});

Horizontal.args = {
    horizontal: true,
};

export const Variants = (args) => ({
    components: {ListGroup, ListGroupItem},
    setup: () => ({args, variants}),
    template: `
        <ListGroup v-bind="args">
            <ListGroupItem
                v-for="v of variants"
                :variant="v"
                tag="button"
            >
                {{ v }}
            </ListGroupItem>
        </ListGroup>
    `,
});
