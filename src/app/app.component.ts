import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './services/blog.service';
/*import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-blogify-tobias-ragosa';
  selectedColor = 'red';
  showDetails = false;
  animals = ['Dog', 'Cat', 'Bird'];
  currentAnimal = 'Dog';
  name: string | undefined;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  changeAnimal(animal: string) {
    this.currentAnimal = animal;
  }
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Blog Übersicht</h1>

    @if (blogService.loading()) {
      <p>Lade Daten...</p>
    } @else {
      <div class="blog-container">
        @for (blog of blogs; track blog.id) {
          <article class="blog-entry">
            <img
              [src]="
                blog.headerImageUrl && blog.headerImageUrl !== 'string'
                  ? blog.headerImageUrl
                  : 'assets/images/platzhalter.png'
              "
              alt="Header Image"
            />
            <h2>{{ blog.title }}</h2>
            <p>{{ blog.contentPreview }}</p>
          </article>
        } @empty {
          <p>Keine Blogeinträge vorhanden.</p>
        }
      </div>
    }
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  blogService = inject(BlogService);

  ngOnInit() {
    this.blogService.loadBlogs();
  }

  get blogs() {
    return this.blogService.blogEntries();
  }

  get isLoading() {
    return this.blogService.loading();
  }
}
