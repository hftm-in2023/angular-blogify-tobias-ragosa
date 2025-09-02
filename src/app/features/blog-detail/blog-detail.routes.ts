import { Routes, ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { BlogDetailContainerComponent } from './blog-detail-container.component';
import { BlogService } from '../../core/services/blog.service';
import { type BlogDetailEntry } from '../../core/models';

export const blogDetailResolver: ResolveFn<BlogDetailEntry> = (route) => {
  const blogService = inject(BlogService);

  const idParam = route.paramMap.get('id');
  const id = idParam ? Number(idParam) : NaN;
  if (isNaN(id)) {
    throw new Error('Ungültige Blog-ID in der URL');
  }

  return blogService.getBlogById(id);
};

export const blogDetailRoutes: Routes = [
  {
    path: '',
    component: BlogDetailContainerComponent,
    resolve: { blog: blogDetailResolver },
  },
];
