![banner-dark](https://user-images.githubusercontent.com/45201651/169008977-bb183203-dc58-44b8-ae79-aa2d2c97a8ce.svg#gh-dark-mode-only)
![banner-light](https://user-images.githubusercontent.com/45201651/169008981-ecd6889a-e444-49a6-8148-62d78ffbb5d4.svg#gh-light-mode-only)

A component library for Vue 3 and Bootstrap 5 + a few extra's.

```html
<h1>
    Vote for best package
</h1>

<Row
    align="center"
    cols="1"
    cols-sm="2"
>
    <Col>
        <FormGroup
            v-model="organisation"
            :invalid-feedback="errors.organisation"
            label="Organisation"
            placholder="owowagency"
        />
    </Col>

    <Col>
        <FormGroup
            :invalid-feedback="errors.package"
            label="Package"
        >
            <FormDropdownSearch
                v-model="package"
                :items="packages"
                placeholder="bootstrap-vue"
            />
        </FormGroup>
    </Col>
</Row>

<ButtonState
    :error="error"
    :loading="loading"
    @click="submit"
>
    Submit
</ButtonState>
```

# Table of contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
6. [License](#license)

# Installation

Installing this package can be done by using `npm` or `yarn`.

```bash
# npm
npm install @owowagency/bootstrap-vue

# yarn
yarn add @owowagency/bootstrap-vue
```

# Usage

This package provides the following features:

### Components

<details>
    <summary>
        Click to view components
    </summary>

- Accordion
- AccordionItem
- [Alert](https://github.com/owowagency/bootstrap-vue/blob/master/src/components/Alert/README.md)
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

Please see [CONTRIBUTING](https://github.com/owowagency/bootstrap-vue/blob/master/CONTRIBUTING) for details.

# License

The MIT License (MIT). Please see [License File](https://github.com/owowagency/bootstrap-vue/blob/master/LICENSE) for more information.
