# usePlacement

```typescript
import usePlacement, {placementProps} from '@/composables/usePlacement';

const props = defineProps({
  ...placementProps,
});

usePlacement(props.placement, 'offcanvas-{0}')
```

## Props

### placement

#### Default Value

`start`

#### Available Values

- `start`
- `end`
- `top`
- `bottom`
