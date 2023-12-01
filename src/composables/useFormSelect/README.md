# useFormSelect

```typescript
import useFormSelect, {formSelectProps} from '@/composables/useFormSelect';

const props = defineProps({
  ...formSelectProps,
});

useFormSelect(props)
```

## Props

### [disabled](../useDisabled)

---

### items

#### Default Value

`[]`

---

### [size](../useSize)

## Item

```typescript
interface Item {
    label?: string;
    selected?: boolean;
    value: string | number | undefined;
}
```
