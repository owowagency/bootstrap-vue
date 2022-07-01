import {PropType} from 'vue';

export const tooltipPlacements = ['top', 'left', 'right', 'bottom', 'auto'] as const;

export type TooltipPlacement = typeof tooltipPlacements[number];

export const tooltipPlacementProps = {
    placement: {
        type: String as PropType<TooltipPlacement>,
        default: 'top',
        validator: (v: TooltipPlacement) => tooltipPlacements.includes(v),
    },
};
