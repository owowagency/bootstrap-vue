import Nav from '.';
import NavItem from '../NavItem';
import NavLink from '../NavLink';

export default {
    title: 'Components/Nav',
    component: Nav,
};

const template = (args) => ({
    components: {Nav, NavItem, NavLink},
    setup: () => ({args}),
    template: `
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    `,
});

export const Default = template.bind({});

export const Vertical = template.bind({});

Vertical.args = {
    vertical: true,
};

export const Tabs = template.bind({});

Tabs.args = {
    tabs: true,
};

export const Pills = template.bind({});

Pills.args = {
    pills: true,
};

export const Fill = template.bind({});

Fill.args = {
    fill: true,
};

export const Justified = template.bind({});

Justified.args = {
    justified: true,
};
