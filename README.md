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

- Accordion
- AccordionItem
- [Alert](./src/components/Alert/README.md)
- [Badge](./src/components/Badge/README.md)
- [Breadcrumb](./src/components/Breadcrumb/README.md)
- [BreadcrumbItem](./src/components/BreadcrumbItem/README.md)
- [Button](./src/components/Button/README.md)
- [ButtonClose](./src/components/ButtonClose/README.md)
- [ButtonGroup](./src/components/ButtonGroup/README.md)
- [ButtonState](./src/components/ButtonState/README.md)
- [Card](./src/components/Card/README.md)
- Carousel
- [Col](./src/components/Col/README.md)
- Collapse
- Confirm
- Container
- Dropdown
- DropdownMenu
- DropdownMenuItem
- FormCheck
- FormCheckGroup
- FormControl
- FormDropdown
- FormDropdownSearch
- FormGroup
- FormImage
- FormPills
- FormSelect
- InputGroup
- ListGroup
- ListGroupItem
- Modal
- Nav
- NavItem
- NavLink
- Offcanvas
- [Row](./src/components/Row/README.md)
- Spinner
- Table
- Tooltip

### Composables

- useActive
- useBootstrap
- useBootstrapEmits
- useBootstrapInstance
- useBreakpoints
- useClasses
- useCol
- useDisabled
- useDropdown
- useDropdownItems
- useFlush
- useFormControl
- useFormSelect
- useId
- usePlacement
- useSize
- useStringTemplate
- useTag
- useTooltipPlacement
- useTrigger
- useVariant

# 🫶 Contributing

Please see [CONTRIBUTING](./CONTRIBUTING.md) for details.

# 📜 License

The MIT License (MIT). Please see [License File](./LICENSE) for more information.

<br>
<br>

<img id="owow" src="https://user-images.githubusercontent.com/45201651/176249441-e83226be-7281-4ddb-ad4a-9100f8862d4e.svg#gh-light-mode-only" width="150">
<img id="owow" src="https://user-images.githubusercontent.com/45201651/176249444-ceede6f9-3c2e-481d-87c3-3a72ca497e65.svg#gh-dark-mode-only" width="150">

This package has been brought to you with much love by the wizkids of [OWOW](https://owow.io/). Do you like this package? We’re still looking for new talent and Wizkids. So do you want to contribute to open source, while getting paid? [Apply now](https://owow.io/jobs).
