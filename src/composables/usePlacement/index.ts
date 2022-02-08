import {PropType} from 'vue';
import useStringTemplate from '@/composables/useStringTemplate';

export const placements = ['start', 'end', 'top', 'bottom'] as const;

export type Placement = typeof placements[number];

export default (placement: MaybeRef<Placement>, classTemplate: MaybeRef<string>) => {
    const {templatedString} = useStringTemplate(classTemplate, placement);

    return {placementClass: templatedString};
};

export const placementProps = {
    placement: {
        type: String as PropType<Placement>,
        default: 'start',
        validator: (v: Placement) => placements.includes(v),
    },
};
