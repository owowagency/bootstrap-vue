# useTooltipPlacement

```typescript
import {tooltipFallbackPlacementProps, tooltipPlacementProps} from '@/composables/useTooltipPlacement';

const props = defineProps({
  ...tooltipFallbackPlacementProps,
  ...tooltipPlacementProps,
});
```

## Props

### fallbackPlacements

#### Default Value

`['top', 'right', 'bottom', 'left']`

#### Available Values

- `top`
- `bottom`
- `left`
- `right`

---

### placement

#### Default Value

`top`

#### Available Values

- `auto`
- `top`
- `bottom`
- `left`
- `right`
