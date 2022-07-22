# useBreakpoints

```typescript
import useBreakpoints, {Breakpoint, breakpointProps} from '@/composables/useBreakpoints';
import {colProp} from '@/composables/useCol';

const props = defineProps({
  cols: colProp,
  ...breakpointProps(colProp),
});

useBreakpoints({
  sm: toRef(props, 'sm'),
  md: toRef(props, 'md'),
  lg: toRef(props, 'lg'),
  xl: toRef(props, 'xl'),
  xxl: toRef(props, 'xxl'),
}, 'col-{0}-{1}')
```

## Available Values

- `sm`
- `md`
- `lg`
- `xl`
- `xxl`
