# Carousel

```vue
<Carousel :slides="[CarouselSlide]" interval="10000" hideControls />
```

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | `uuid`  |

<!-- TODO Auto-generate based on type? -->

## Events

| Name  | Args | Description                                                 |
| ----- | ---- | ----------------------------------------------------------- |
| slid  |      | Fired when the carousel has completed its slide transition  |
| slide |      | Fires immediately when the slide instance method is invoked |

## Props

| Prop name      | Description                                  | Type            | Values | Default     |
| -------------- | -------------------------------------------- | --------------- | ------ | ----------- |
| dark           | Use dark mode for the controls               | boolean         | -      | false       |
| fade           | Use a fade transition for the slides         | boolean         | -      | false       |
| hideControls   | Hide the controls                            | boolean         | -      | false       |
| hideIndicators | Hide the indicators                          | boolean         | -      | false       |
| interval       | The interval of the carousel in milliseconds | number          | -      | 5000        |
| slides         | The slides of the carousel                   | CarouselSlide[] | -      | () =&gt; [] |

## Slots

| Name         | Description                          | Bindings                                                                                                |
| ------------ | ------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| slides       | Displays content inside the carousel | **slides** `array` - The `CarouselSlide` list                                                           |
| default      | Displays content inside the slide    | **index** `int` - The index of the slide<br/>**slide** `object` - The `CarouselSlide` object            |
| caption      | Display the caption of the carousel  | **description** `string` - The description of the slide<br/>**title** `string` - The title of the slide |
| control-prev | Renders a previous control button    | **dataset** `Object` - Bootstrap data attributes required for controlling the carousel                  |
| control-next | Renders a next control button        | **dataset** `Object` - Bootstrap data attributes required for controlling the carousel                  |
| indicator    |                                      | <br/><br/><br/>                                                                                         |
