import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ConferenceAjouter } from './conference-ajouter/conference-ajouter';
@Component({
  selector: 'app-root',
  imports: [Header, Footer, ConferenceAjouter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prosit_angular_negra_syrine');
nomConference: any;
}
