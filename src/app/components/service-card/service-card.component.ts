import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {

  @Input() imgSrc: string = '';
  @Input() imgAlt: string = '';
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
}
