# useFlush

```typescript
import useFlush, {flushProps} from '@/composables/useFlush';

const props = defineProps({
...flushProps,
});

useFlush(props.flush, 'accordion-{0}')
```

## Props

### flush

##### Default Value

`false`
