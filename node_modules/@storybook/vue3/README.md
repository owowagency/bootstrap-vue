# Storybook for Vue 3

Storybook for Vue 3 is a UI development environment for your Vue 3 components.
With it, you can visualize different states of your UI components and develop them interactively.

![Storybook Screenshot](https://github.com/storybookjs/storybook/blob/main/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started

```sh
cd my-vue3-app
npx sb init
```

For more information visit: [storybook.js.org](https://storybook.js.org)

---

Storybook also comes with a lot of [addons](https://storybook.js.org/docs/vue3/configure/storybook-addons) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/docs/vue3/workflows/publish-storybook) of your storybook and deploy it anywhere you want.

## Extending the Vue application

Storybook creates a [Vue 3 application](https://v3.vuejs.org/api/application-api.html#application-api) for your component preview which can be imported as `import { app } from '@storybook/vue3'`.

When using global custom components (`app.component`), directives (`app.directive`), extensions (`app.use`), or other application methods, you will need to configure those in the `./storybook/preview.js` file.

For example:

```js
// .storybook/preview.js

import { app } from '@storybook/vue3';

app.use(MyPlugin);
app.component('my-component', MyComponent);
app.mixin({
  /* My mixin */
});
```
