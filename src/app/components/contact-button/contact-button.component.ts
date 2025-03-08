import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-button',
  imports: [CommonModule],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss',
})
export class ContactButtonComponent {

  @Input() contactTitle: string = '';
  @Input() contactImgSrc: string = '';
  @Input() contactImgAlt: string = '';
  @Input() buttonClass: string = '';
}
