import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected title = 'catalogstore';
}
