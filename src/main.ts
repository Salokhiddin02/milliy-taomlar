import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from './app/app.routes';
import { Component } from '@angular/core';
import 'zone.js';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">🏠 Home</a> |
      <a routerLink="/taomlar" routerLinkActive="active" ariaCurrentWhenActive="page">🍲 Taomlar</a> |
      <a routerLink="/biz-haqimizda" routerLinkActive="active" ariaCurrentWhenActive="page">ℹ️ Biz haqimizda</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class RootComponent {}

bootstrapApplication(RootComponent, {
  providers: [provideRouter(routes)],
});
