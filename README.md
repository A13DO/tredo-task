# Tredo Project

| **Section**                     | **Details**                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| 🅰️ **Framework**               | Generated using [Angular CLI](https://github.com/angular/angular-cli) **version 19.2.17** |
| 📦 **Install Dependencies**     | `npm i`                                                                                   |
| 🚀 **Start Development Server** | `ng serve`                                                                                 |
| 🌐 **Local Development URL**    | [http://localhost:4200/](http://localhost:4200/)                                          |

---

## Table of Contents
1. [Project Guidelines / Checklist](#project-guidelines--checklist)
2. [SharedTableComponent](#sharedtablecomponent)
   - [Description](#description)
   - [Features](#features)
   - [Inputs](#inputs)
   - [ViewChild](#viewchild)
   - [Usage Example](#usage-example)
3. [TypeBadgeDirective](#typebagedirective)
   - [Description](#description-1)
   - [Input](#input)
   - [Usage](#usage)

---

## Project Guidelines / Checklist

- [x] **Use TailwindCSS Config**: All colors and spacing values are defined in `tailwind.config.js`. No arbitrary values should be used directly inside components. ✅ true
- [x] **Customize PrimeNG Components**: Ability to apply custom styling to PrimeNG components as per the design. ✅ true
- [x] **Follow Fonts**: Adhere to font types, sizes, and weights as specified in the design. ✅ true
- [x] **Use PrimeNG for Basic Inputs**:
  - Date → `p-calendar`
  - Time → `p-calendar` (time mode)
  - Select/Dropdown → `p-dropdown` ✅ true
- [x] **Local UI Customization**: All PrimeNG component customizations are scoped locally; global overrides are prohibited. ✅ true
- [x] **Icons**: Use PrimeNG icons wherever possible. ✅ true

---

## SharedTableComponent

### Description
`SharedTableComponent` is a reusable Angular component built with **PrimeNG** and **TailwindCSS** for displaying data in a table format. Supports **sorting, filtering, exporting, and copy-to-clipboard** features while following design standards.

### Features
- Responsive table layout (`p-table`) with scrolling.
- Multi-column sorting (`p-sortIcon`) for all columns except actions.
- Selectable rows with checkboxes (`p-tableHeaderCheckbox` & `p-tableCheckbox`).
- Copy-to-clipboard functionality for `code` and `AWB`.
- Custom badges for `type` field via `TypeBadgeDirective`.
- Search input with Tailwind styling.
- Filters popover:
  - Date & Time pickers (`p-datepicker`) for range filtering.
  - Apply button to trigger filters.
- TailwindCSS-based spacing, colors, and typography.
- All PrimeNG modifications are local to the component.

### Inputs
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `{ field: string; header: string }[]` | `[]` | Table column definitions. |
| `data` | `any[]` | `[]` | Array of table row data. |
| `table_title` | `string` | `''` | Title displayed above the table. |

### ViewChild
| Name | Type | Description |
|------|------|-------------|
| `filterPopover` | `Popover` | Reference to the filters popover. |


## TypeBadgeDirective

### Description
Displays a small colored badge with a label based on the input `type`.  
Supports `delivery`, `return`, `pickup`, or any other value. Styles are applied locally using `Renderer2`.

### Input
| Name | Type | Description |
|------|------|-------------|
| `appTypeBadge` | `string` | Type of badge (`delivery`, `return`, `pickup`, or other). |

### Usage
```html
<div [appTypeBadge]="order.type"></div>


