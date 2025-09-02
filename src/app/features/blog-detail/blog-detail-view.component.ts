import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { type BlogDetailEntry } from '../../core/models'; // Barrel-Export

@Component({
  selector: 'app-blog-detail-view',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule],
  templateUrl: './blog-detail-view.component.html',
  styleUrls: ['./blog-detail-view.component.scss'],
})
export class BlogDetailViewComponent {
  @Input() blog: BlogDetailEntry | null = null;
}
