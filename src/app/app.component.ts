import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
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
}
