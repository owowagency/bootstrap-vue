# FormSelect

```vue
<FormSelect v-model="language" :items="[Item]" />
```

## Imported Props

| Prop name | Description                    | Type                                         | Values | Default  |
| --------- | ------------------------------ | -------------------------------------------- | ------ | -------- |
| disabled  | Disables the component         | boolean                                      | -      | false    |
| items     | The items of the dropdown menu | [Item[]](../../composables/useDropdownItems) | -      | () => [] |
| size      | The size of the component      | [Size](../../composables/useSize) (string)   | -      | 'md'     |
