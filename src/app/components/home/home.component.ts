import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, WelcomeSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
