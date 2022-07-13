![banner-dark](https://user-images.githubusercontent.com/45201651/169008977-bb183203-dc58-44b8-ae79-aa2d2c97a8ce.svg#gh-dark-mode-only)
![banner-light](https://user-images.githubusercontent.com/45201651/169008981-ecd6889a-e444-49a6-8148-62d78ffbb5d4.svg#gh-light-mode-only)

<br>

<p align="center">
    <img src="https://img.shields.io/npm/v/@owowagency/bootstrap-vue">
    <img src="https://github.com/owowagency/bootstrap-vue/actions/workflows/test.yml/badge.svg">
</p>

<p align="center">
    A component library for Vue 3 and Bootstrap 5 + a few extra's just for you 😉.
</p>

<br>

```html
<Row
    align="end"
    cols="1"
    cols-sm="3"
>
    <Col>
        <FormGroup
            v-model="email"
            :invalid-feedback="errors.email"
            label="Email address"
            placeholder="bootstrap-vue@owow.io"
        />
    </Col>

    <Col>
        <FormGroup
            v-model="password"
            :invalid-feedback="errors.password"
            label="Password"
            type="password"
        />
    </Col>

    <Col>
        <ButtonState
            :error="error"
            :loading="loading"
            @click="login"
        >
            Login
        </ButtonState>
    </Col>
</Row>
```

# 📖 Table of contents

1. [Demo](#-demo)
1. [Installation](#%EF%B8%8F-installation)
1. [Usage](#-usage)
1. [Contributing](#-contributing)
1. [License](#-license)
1. [OWOW](#owow)

# 🚀 Demo

All components can be found on the [Storybook page](https://owowagency.github.io/bootstrap-vue) of this package.

# ⚙️ Installation

Installing this package can be done by using `npm` or `yarn`.

```bash
# npm
npm install @owowagency/bootstrap-vue

# yarn
yarn add @owowagency/bootstrap-vue
```

This package also requires [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/download/#package-managers) for its styling and Javascript.

```bash
# npm
npm install bootstrap

# yarn
yarn add bootstrap
```

# 🛠 Usage

Here is a simple example on how to use a component in your Vue application:

```html
<template>
    <Button variant="danger">
        Please don't click me!
    </Button>
</template>

<script setup>
import {Button} from '@owowagency/bootstrap-vue';
</script>
```

This package provides the following features:

### Components

- [Accordion](./src/components/Accordion)
- [AccordionItem](./src/components/AccordionItem)
- [Alert](./src/components/Alert)
- [Badge](./src/components/Badge)
- [Breadcrumb](./src/components/Breadcrumb)
- [BreadcrumbItem](./src/components/BreadcrumbItem)
- [Button](./src/components/Button)
- [ButtonClose](./src/components/ButtonClose)
- [ButtonGroup](./src/components/ButtonGroup)
- [ButtonState](./src/components/ButtonState)
- [Card](./src/components/Card)
- [Carousel](./src/components/Carousel)
- [Col](./src/components/Col)
- [Collapse](./src/components/Collapse)
- [Confirm](./src/components/Confirm)
- [Container](./src/components/Container)
- [Dropdown](./src/components/Dropdown)
- [DropdownMenu](./src/components/DropdownMenu)
- [DropdownMenuItem](./src/components/DropdownMenuItem)
- [FormCheck](./src/components/FormCheck)
- [FormCheckGroup](./src/components/FormCheckGroup)
- [FormControl](./src/components/FormControl)
- [FormDropdown](./src/components/FormDropdown)
- [FormDropdownSearch](./src/components/FormDropdownSearch)
- [FormGroup](./src/components/FormGroup)
- [FormImage](./src/components/FormImage)
- [FormPills](./src/components/FormPills)
- [FormSelect](./src/components/FormSelect)
- [InputGroup](./src/components/InputGroup)
- [ListGroup](./src/components/ListGroup)
- [ListGroupItem](./src/components/ListGroupItem)
- [Modal](./src/components/Modal)
- [Nav](./src/components/Nav)
- [NavItem](./src/components/NavItem)
- [NavLink](./src/components/NavLink)
- [Offcanvas](./src/components/Offcanvas)
- [Row](./src/components/Row)
- [Spinner](./src/components/Spinner)
- [Table](./src/components/Table)
- [Tooltip](./src/components/Tooltip)

### Composables

- [useActive](./src/composables/useActive)
- [useBootstrap](./src/composables/useBootstrap)
- [useBootstrapEmits](./src/composables/useBootstrapEmits)
- [useBootstrapInstance](./src/composables/useBootstrapInstance)
- [useBreakpoints](./src/composables/useBreakpoints)
- [useClasses](./src/composables/useClasses)
- [useCol](./src/composables/useCol)
- [useDisabled](./src/composables/useDisabled)
- [useDropdown](./src/composables/useDropdown)
- [useDropdownItems](./src/composables/useDropdownItems)
- [useFlush](./src/composables/useFlush)
- [useFormControl](./src/composables/useFormControl)
- [useFormSelect](./src/composables/useFormSelect)
- [useId](./src/composables/useId)
- [usePlacement](./src/composables/usePlacement)
- [useSize](./src/composables/useSize)
- [useStringTemplate](./src/composables/useStringTemplate)
- [useTag](./src/composables/useTag)
- [useTooltipPlacement](./src/composables/useTooltipPlacement)
- [useTrigger](./src/composables/useTrigger)
- [useVariant](./src/composables/useVariant)

# 🫶 Contributing

Please see [CONTRIBUTING](./CONTRIBUTING.md) for details.

# 📜 License

The MIT License (MIT). Please see [License File](./LICENSE) for more information.

<br>
<br>

<img id="owow" src="https://user-images.githubusercontent.com/45201651/176249441-e83226be-7281-4ddb-ad4a-9100f8862d4e.svg#gh-light-mode-only" width="150">
<img id="owow" src="https://user-images.githubusercontent.com/45201651/176249444-ceede6f9-3c2e-481d-87c3-3a72ca497e65.svg#gh-dark-mode-only" width="150">

This package has been brought to you with much love by the wizkids of [OWOW](https://owow.io/). Do you like this package? We’re still looking for new talent and Wizkids. So do you want to contribute to open source, while getting paid? [Apply now](https://owow.io/jobs).
