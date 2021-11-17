import {ComponentObjectPropsOptions, Prop, computed, unref} from 'vue';
import {MaybeRef} from '../..';
import templateString from '../../library/templateString';
import useClasses from '../useClasses';
import useStringTemplate from '../useStringTemplate';

export const breakpoints = ['sm', 'md', 'lg', 'xl', 'xxl'] as const;

export type Breakpoint = typeof breakpoints[number];

export default (props: MaybeRef<Record<Breakpoint, string | number | undefined>>, classTemplate: MaybeRef<string>) => {
    const breakpointClasses = computed(() => breakpoints
        .map(b => useStringTemplate(classTemplate, [b, unref(props)[b]]).templatedString.value),
    );

    return {
        breakpointClasses: useClasses(breakpointClasses.value).classes,
    };
};

export const breakpointProps = <T = number | string>(propTemplate: Prop<T>, template: string = '{0}'): ComponentObjectPropsOptions => {
    return Object.fromEntries(
        breakpoints.map((b) => [
            templateString(template, b),
            propTemplate,
        ]),
    );
};
