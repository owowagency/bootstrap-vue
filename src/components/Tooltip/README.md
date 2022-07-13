# Tooltip

```vue
<Tooltip :fallback-placements="['bottom']">
    Insert coin here
</Tooltip>
```

## Imported Props

| Prop name          | Description                                | Type                                                              | Values                                | Default                            |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------- | ---------------------------------- |
| fallbackPlacements | The fallback placements of the component   | [TooltipFallbackPlacement](../../composables/useTooltipPlacement) | ['top'\|'bottom'\|'left'\|'right']    | ['top', 'right', 'bottom', 'left'] |
| placement          | The default placement of the component     | [TooltipPlacement](../../composables/useTooltipPlacement)         | ['top'\|'bottom'\|'left'\|'right']    | 'top'                              |
| trigger            | The trigger on which to toggle the trigger | [Trigger](../../composables/useTrigger)                           | ['click'\|'hover'\|'focus'\|'manual'] | ['hover', 'focus']                 |

<!-- TODO Auto-generate based on type? -->

## Events

| Name          | Args | Description                                                                                             |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the `show` instance method is called                                  |
| shown         |      | This event is fired when the popover has been made visible to the user                                  |
| hide          |      | This event is fired immediately when the `hide` instance method has been called                         |
| hidden        |      | This event is fired when the popover has finished being hidden from the user                            |
| hidePrevented |      | This event is fired after the show.bs.tooltip event when the tooltip template has been added to the DOM |

## Props

| Prop name    | Description                                          | Type                         | Values | Default           |
| ------------ | ---------------------------------------------------- | ---------------------------- | ------ | ----------------- |
| boundary     | Overflow constraint boundary of the tooltip          | string \| HTMLElement        | -      | 'clippingParents' |
| container    | Appends the tooltip to the given element             | string\|HTMLElement\|boolean | -      | false             |
| customClass  | The classes that will be forwarded to the tooltip    | string\|array\|object        | -      | ''                |
| delay        | Delay showing and hiding the tooltip in milliseconds | number\|object               | -      | 0                 |
| html         | Defines if HTML is allowed in the tooltip            | boolean                      | -      | false             |
| offset       | The x, y offset of the tooltip                       | string \| number[]           | -      | () => [0, 0]      |
| popperConfig | Change Bootstrap's default Popper config             | object\|func                 | -      | () => ({})        |
| tag          | The tag to be used for the list group item           | string                       | -      | 'div'             |
| title        | The text to display in the tooltip                   | string                       | -      | ''                |

## Slots

| Name    | Description                         | Bindings |
| ------- | ----------------------------------- | -------- |
| default | Displays the content of the tooltip |          |
