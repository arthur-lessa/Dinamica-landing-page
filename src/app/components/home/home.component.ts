import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { WelcomeSectionComponent } from '../welcome-section/welcome-section.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { ScheduleAppointmentComponent } from '../schedule-appointment/schedule-appointment.component';

@Component({
  selector: 'app-home',
  imports: [
    NavbarComponent, 
    WelcomeSectionComponent, 
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    ScheduleAppointmentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
