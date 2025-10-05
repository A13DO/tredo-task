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
