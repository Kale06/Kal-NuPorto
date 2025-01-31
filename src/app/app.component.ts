import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { LandingComponent } from './landing/landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCompComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'Kal-zone';
}
