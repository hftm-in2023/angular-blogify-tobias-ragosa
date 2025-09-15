import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { AuthStore } from './core/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly #authStore = inject(AuthStore);

  onModeChange($event: string) {
    console.log(`event fired ${$event}`);
  }

  isAuthenticated = this.#authStore.isAuthenticated;
  userData = this.#authStore.userData;
  roles = this.#authStore.roles;
  hasUserRole = this.#authStore.hasUserRole;

  login() {
    this.#authStore.login();
  }

  logout() {
    this.#authStore.logout();
  }
}
