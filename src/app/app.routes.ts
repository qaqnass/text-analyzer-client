import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/textanalyzer', pathMatch: 'full' },
  {
    path: 'textanalyzer',
    loadComponent: () =>
      import('./pages/text-analyzer/text-analyzer.component').then(module => module.TextAnalyzerComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(module => module.NotFoundComponent),
  },
];
