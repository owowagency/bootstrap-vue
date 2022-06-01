![banner-dark](https://user-images.githubusercontent.com/45201651/169008977-bb183203-dc58-44b8-ae79-aa2d2c97a8ce.svg#gh-dark-mode-only)
![banner-light](https://user-images.githubusercontent.com/45201651/169008981-ecd6889a-e444-49a6-8148-62d78ffbb5d4.svg#gh-light-mode-only)

A component library for Vue 3 and Bootstrap 5 + a few extra's.

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

# Table of contents

1. [Demo](#demo)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Contributing](#contributing)
1. [License](#license)
1. [OWOW](#owow)

# Demo

All components can be found on the [Storybook page](https://owowagency.github.io/bootstrap-vue) of this package.

# Installation

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

# Usage

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

<details>
    <summary>
        Click to view components
    </summary>

- Accordion
- AccordionItem
- [Alert](./src/components/Alert/README.md)
- Badge
- Breadcrumb
- BreadcrumbItem
- Button
- ButtonClose
- ButtonGroup
- ButtonState
- Card
- Carousel
- Col
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
- Row
- Spinner
- Table
</details>

<br>

### Composables

<details>
    <summary>
        Click to view composables
    </summary>

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
- useVariant
</details>

# Contributing

Please see [CONTRIBUTING](./CONTRIBUTING.md) for details.

# License

The MIT License (MIT). Please see [License File](./LICENSE) for more information.

# OWOW

This package has been brought to you with much love by the wizkids of OWOW.asda as
