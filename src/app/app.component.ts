import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCompComponent } from './header-comp/header-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'kal-portfolio';
}
