import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/financial/financial.component').then(
        (m) => m.FinancialComponent
      ),
  },
];
