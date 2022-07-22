# useVariant

```typescript
import useVariant, {variantProps} from '@/composables/useVariant';

const props = defineProps({
  ...variantProps,
});

useVariant(props.variant, 'alert-{0}')
```

## Props

### variant

#### Default Value

`primary`

#### Available Values

- `primary`
- `secondary`
- `success`
- `danger`
- `warning`
- `info`
- `light`
- `dark`
- `link`
