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
### Customized
3. [SharedTableComponent](#sharedtablecomponent)
4. [TypeBadgeDirective](#typebadgedirective)
5. [StatisticsCardComponent](#typebadgedirective)
5. [CustomPrimeNgBreadcrumb](#typebadgedirective)
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
`SharedTableComponent` is a reusable table component. Supports **sorting, row select & more**.

### Inputs
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `{ field: string; header: string }[]` | `[]` | Table column definitions. |
| `data` | `any[]` | `[]` | Array of table row data. |
| `table_title` | `string` | `''` | Title displayed above the table. |

### How it Works

1. **Dynamic Columns**  
   - Pass an array of columns via the `columns` input:  
     ```ts
     columns = [
       { field: 'code', header: 'Code' },
       { field: 'AWB', header: 'AWB' },
       { field: 'fromDay', header: 'From Date' },
       { field: 'toDay', header: 'To Date' },
       { field: 'type', header: 'Type' },
       { field: 'COD', header: 'COD' },
       { field: 'shippingFees', header: 'Shipping Fees' },
       { field: 'actions', header: 'Actions' }
     ];
     ```
   - Each column is rendered with `<th>` in the table header. Columns can be sortable unless they are `actions`.

2. **Row Rendering and `@switch`**  
   - The table body iterates over `data` rows.  
   - `@switch(col.field)` is used to **render specific columns differently**:
     - `code` and `AWB`: clickable to **copy to clipboard**. Icon changes to a check mark when copied.
     - `fromDay`, `toDay`, `pickupTime`: formatted as **date and time**.
     - `type`: rendered with [TypeBadgeDirective](#typebadgedirective) for colored badges.
     - `COD` and `shippingFees`: show values with currency.
     - `actions`: render buttons for **PDF and Excel export**.

3. **Selection**  
   - Header checkbox: `<p-tableHeaderCheckbox>`  
   - Row checkbox: `<p-tableCheckbox [value]="row">`  
   - Allows selecting multiple rows.





## TypeBadgeDirective
Displays a small colored badge with a label based on the input `type`.  

### Input
| Name | Type | Description |
|------|------|-------------|
| `appTypeBadge` | `string` | Type of badge (`delivery`, `return`, `pickup`). |

### Usage
```html
<div [appTypeBadge]="order.type"></div>


