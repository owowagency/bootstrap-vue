# useSize

```typescript
import useSize, {sizeProps} from '@/composables/useSize';

const props = defineProps({
  ...sizeProps,
});

useSize(props.size, 'btn-{0}')
```

## Props

### size

#### Default Value

`md`

#### Available Values

- `sm`
- `md`
- `lg`
- `xl`
