import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, shareReplay } from 'rxjs';
import { BlogDetailViewComponent } from './blog-detail-view.component';
import { type BlogDetailEntry } from '../../core/models';

@Component({
  selector: 'app-blog-detail-container',
  standalone: true,
  imports: [CommonModule, BlogDetailViewComponent, BlogDetailViewComponent],
  template: `
    <app-blog-detail-view [blog]="blog$ | async"></app-blog-detail-view>
  `,
})
export class BlogDetailContainerComponent {
  private route = inject(ActivatedRoute);

  blog$ = this.route.data.pipe(
    map((d) => (d['blog'] as BlogDetailEntry) ?? null),
    shareReplay({ bufferSize: 1, refCount: true }),
  );
}
