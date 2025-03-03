import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent, 
    WelcomeSectionComponent, 
    AboutComponent,
    ServicesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
