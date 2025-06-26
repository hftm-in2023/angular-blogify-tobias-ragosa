import { Routes } from '@angular/router';
import { DemoComponent } from './features/demo/demo.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./features/blog-detail/blog-detail.module').then(
        (m) => m.BlogDetailModule,
      ),
  },
  { path: 'demo', component: DemoComponent },
];
