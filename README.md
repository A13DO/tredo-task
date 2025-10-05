| **Section**                     | **Details**                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| 🅰️ **Framework**               | Generated using [Angular CLI](https://github.com/angular/angular-cli) **version 19.2.17** |
| 📦 **Install Dependencies**     | `npm i`                                                                       |
| 🚀 **Start Development Server** | `ng serve`                                                                    |
| 🌐 **Local Development URL**    | [http://localhost:4200/](http://localhost:4200/)                                          |




# Project Guidelines / Checklist

- [x] **Use TailwindCSS Config**: All colors and spacing values are defined in `tailwind.config.js`. No arbitrary values should be used directly inside components. ✅ true

- [x] **Customize PrimeNG Components**: Ability to apply custom styling to PrimeNG components as per the design. Example: modifying buttons, tables, or any PrimeNG element. ✅ true

- [x] **Follow Fonts**: Adhere to font types, sizes, and weights as specified in the design. ✅ true

- [x] **Use PrimeNG for Basic Inputs**:
  - Date → `p-calendar`
  - Time → `p-calendar` (time mode)
  - Select/Dropdown → `p-dropdown`
✅ true

- [x] **Local UI Customization**: Any customization of PrimeNG components must be done **locally within the same component**. Global overrides affecting the entire project are prohibited. ✅ true

- [x] **Icons**: Use PrimeNG icons wherever possible. ✅ true



## SharedTableComponent Documentation

### Description
`SharedTableComponent` is a reusable Angular component built with **PrimeNG** and **TailwindCSS** for displaying data in a table format. It supports **sorting, filtering, exporting, and copying data to clipboard**. The component is fully customizable and follows design standards via Tailwind configuration.  

---

### Features
- Responsive table layout (`p-table`) with scrolling support.
- Multi-column sorting (`p-sortIcon`) for all columns except actions.
- Selectable rows with checkboxes (`p-tableHeaderCheckbox` & `p-tableCheckbox`).
- Copy-to-clipboard functionality for `code` and `AWB` columns.
- Custom badges for `type` field via `TypeBadgeDirective`.
- Search input with styled Tailwind design.
- **Filters popover** with:
  - Date and Time pickers (`p-datepicker`) for range filtering.
  - Apply button to trigger filter logic.
- Fully styled using **TailwindCSS** for spacing, colors, and typography.
- Local customizations: all PrimeNG component modifications are scoped to this component.

---

### Inputs
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `{ field: string; header: string }[]` | `[]` | Defines table columns with field names and headers. |
| `data` | `any[]` | `[]` | Array of objects representing table rows. |
| `table_title` | `string` | `''` | Title displayed above the table. |

---

### ViewChild
| Name | Type | Description |
|------|------|-------------|
| `filterPopover` | `Popover` | Reference to the popover used for filtering. |

### TypeBadgeDirective

**Description**  
`TypeBadgeDirective` displays a colored badge with a label based on the input `type` (e.g., `delivery`, `return`, `pickup`, or others). It uses `Renderer2` to style the badge locally with a small circle and text.

---

### Input
| Name | Type | Description |
|------|------|-------------|
| `appTypeBadge` | `string` | The type of badge to display (`delivery`, `return`, `pickup`, or any other value). |

---

### Usage
```html
<div [appTypeBadge]="order.type"></div>
---

### Usage Example
```html
<app-shared-table
  [columns]="columns"
  [data]="orders"
  table_title="Orders Table">
</app-shared-table>
