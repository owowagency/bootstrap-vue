import {ComponentObjectPropsOptions, Prop, computed, unref} from 'vue';
import templateString from '@/library/templateString';
import useClasses from '@/composables/useClasses';
import useStringTemplate from '@/composables/useStringTemplate';

export const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type Breakpoint = typeof breakpoints[number];

export default (props: Record<Breakpoint, MaybeRef<string | number | undefined>>, classTemplate: MaybeRef<string>) => {
    const breakpointClasses = computed(() => breakpoints
        .map(b => useStringTemplate(classTemplate, [b, unref(props[b])]).templatedString.value),
    );

    return {
        breakpointClasses: useClasses(breakpointClasses).classes,
    };
};

export const breakpointProps = <T = number | string>(propTemplate: Prop<T>, template = '{0}'): ComponentObjectPropsOptions => {
    return Object.fromEntries(
        breakpoints.map((b) => [
            templateString(template, b),
            propTemplate,
        ]),
    );
};
