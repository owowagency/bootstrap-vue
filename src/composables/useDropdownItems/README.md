# useDropdownItems

```typescript
import {dropdownItemsProps} from '@/composables/useDropdownItems';

const props = defineProps({
  ...dropdownItemsProps,
});
```

## Props

### items

##### Default Value

`[]`

## Item

```typescript
interface Item {
    active?: boolean;
    label?: string;
    divider?: boolean;
    header?: boolean;
}
```
