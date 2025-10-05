# Tredo Project

| **Section**                     | **Details**                                                                               |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| 🅰️ **Framework**               | Generated using [Angular CLI](https://github.com/angular/angular-cli) **version 19.2.17** |
| 📦 **Install Dependencies**     | `npm i`                                                                                   |
| 🚀 **Start Development Server** | `ng serve`                                                                                 |
| 🌐 **Local Development URL**    | [http://localhost:4200/](http://localhost:4200/)                                          |

---

## Table of Contents

### Customized
1. [SharedTableComponent](#sharedtablecomponent)
2. [TypeBadgeDirective](#typebadgedirective) (Used in the table)
3. [StatisticsCardComponent](#statisticscardcomponent) (Used in financial page)
4. [CustomPrimeNgBreadcrumb](#customprimengbreadcrumb) (Used in financial page)
### Checklist
5. [Project Guidelines / Checklist](#project-guidelines--checklist)

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
   - Provide `columns` for headers and `items` for row data, where each item's keys match the corresponding column `field`.
   
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

     items = [
       { 
         code: 'ORD001', AWB: 'AWB12345',
         fromDay: new Date(), 
         toDay: new Date(), 
         pickupTime: new Date(),
         type: 'delivery', 
         ...
       }
      ...
     ]
     ```
   - Each column is rendered with `<th>` in the table header. Columns can be sortable unless they are `actions`.

2. **Row Rendering and `@switch`**  
   - The table body iterates over `data` rows.  
   - `@switch(col.field)` is used to **render specific columns differently**:
     - `code` and `AWB`: clickable to **copy to clipboard**.
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
 ```
 
## StatisticsCardComponent

### Description
A reusable card component, shows a summary with:  

### Usage
```html
<app-statistics-card
  title="Total COD"
  amount="EGP 25,430"
  percentage="+12.5%"
  description="Cash collected"
  icon="docs_icon"
  color="#E9EAFF"
  trend="up">
</app-statistics-card>
```


## CustomPrimeNgBreadcrumb
A reusable breadcrumb component built with **PrimeNG** for displaying navigation paths.

### Inputs
| Name | Type | Description |
|------|------|-------------|
| `items` | `{ label: string; icon: string; current?: boolean }[]` | Array of breadcrumb items. The `current` property highlights the active item. |

### Usage
```html
<app-custom-primeng-breadcrumb [items]="items"></app-custom-primeng-breadcrumb>
```

---

## Project Guidelines / Checklist

- [x] **TailwindCSS Config**: All colors and spacing come from `tailwind.config.js`. 

  **Note:** All colors and spacing are based on repeatedly used values from the Figma design.

```ts
  // (example) 
  spacing: {
    sm: '8px',
    md: '10px',
    lg: '12px',
    ...
  },
  fontSize: {
    sm: ['14px', { fontWeight: '400' }],
    md: ['14px', { fontWeight: '500' }],
    lg: ['16px', { fontWeight: '500' }]
    ...
  }
```
- [x] **PrimeNG Local Customization**: Style components locally according to design; no global overrides.
```css
  // using this method (example)
  :host {
     --p-breadcrumb-padding: 0;
  }
```
- [x] **Basic Inputs (PrimeNG)**:  
  - Date/Time → `p-datepicker`  
  - Select/Dropdown → used `p-popover`
  - Toast Messages → `p-toast` notifications displayed
- [x] **Fonts**: Follow design-specified types, sizes, and weights.







