# Contributing

## Setup

```bash
git clone git@github.com:owowagency/bootstrap-vue.git
cd bootstrap-vue
yarn
```

## Storybook

This package utilizes [Storybook](https://storybook.js.org/) to easily develop components in isolation.

```bash
yarn storybook
```

## Code style

Follow the code styling defined in [.eslintrc.js](./.eslintrc.js).

```bash
yarn lint
```

## Commit messages

Follow the commit message structure of [semantic-release](https://github.com/semantic-release/semantic-release#commit-message-format).

## Testing

All code of this package is tested using [Jest](https://jestjs.io/).

```bash
yarn test
```

## Development

### Components

Each component is stored in its own folder in the `src/components` folder.

In this folder the following files are required to be present:
- Vue component file named after the component itself, example: `Alert.vue`. This file contains the code of the component itself.
- A storybook file to preview the component, `Alert.stories.ts`.
- A test file in which the component is tested, `Alert.test.ts`.

Further more this component needs to be exported and made available to consumers.
