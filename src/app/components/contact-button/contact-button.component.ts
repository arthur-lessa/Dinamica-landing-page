import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  imports: [],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss'
})
export class ContactButtonComponent {

  @Input() contactTitle: string = '';
  @Input() contactImgSrc: string = '';
  @Input() contactImgAlt: string = '';
  @Input() buttonClass: string = '';
}
