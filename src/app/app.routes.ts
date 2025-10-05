import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'financial', pathMatch: 'full' },
  {
    path: 'financial',
    loadComponent: () =>
      import('./features/financial/financial.component').then(
        (m) => m.FinancialComponent
      ),
  },
];
