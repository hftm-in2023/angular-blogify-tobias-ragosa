import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DemoComponent } from './demo/demo.component';

export const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'demo', component: DemoComponent },
];
