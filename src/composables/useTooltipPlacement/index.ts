import {PropType} from 'vue';

export const tooltipFallbackPlacements = ['top', 'bottom', 'left', 'right'] as const;
export const tooltipPlacements = [...tooltipFallbackPlacements, 'auto'] as const;

export type TooltipFallbackPlacement = typeof tooltipFallbackPlacements[number];
export type TooltipPlacement = typeof tooltipPlacements[number];

export const tooltipFallbackPlacementProps = {
    fallbackPlacements: {
        type: Array as PropType<TooltipFallbackPlacement[]>,
        default: () => ['top', 'right', 'bottom', 'left'],
        validator: (v: TooltipFallbackPlacement[]) => v.every(p => tooltipFallbackPlacements.includes(p)),
    },
};

export const tooltipPlacementProps = {
    placement: {
        type: String as PropType<TooltipPlacement>,
        default: 'top',
        validator: (v: TooltipPlacement) => tooltipPlacements.includes(v),
    },
};
