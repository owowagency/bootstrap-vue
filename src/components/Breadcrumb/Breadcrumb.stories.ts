import Breadcrumb from '.';
import BreadcrumbItem from '@/components/BreadcrumbItem';

export default {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
};

const template = (args) => ({
    components: {Breadcrumb, BreadcrumbItem},
    setup: () => ({args}),
    template: `
        <Breadcrumb v-bind="args">
            <BreadcrumbItem>
                <a href="#">
                    Home
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <a href="#">
                    Library
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem active>
                Data
            </BreadcrumbItem>
        </Breadcrumb>
    `,
});

export const Default = template.bind({});
