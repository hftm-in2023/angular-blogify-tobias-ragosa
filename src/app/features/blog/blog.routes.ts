import { Routes, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { of } from 'rxjs';

import { BlogComponent } from './blog.component';
import { BlogService } from '../../core/services/blog.service';

export const blogListResolver: ResolveFn<boolean> = () => {
  const blogService = inject(BlogService);

  if (blogService.blogEntries().length > 0) {
    return of(true);
  }

  blogService.loadBlogs();

  return of(true);
};

export const blogRoutes: Routes = [
  {
    path: '',
    component: BlogComponent,
    resolve: { ready: blogListResolver },
  },
];
