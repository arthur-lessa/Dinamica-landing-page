import { Component } from '@angular/core';
import { ContactButtonComponent } from '../contact-button/contact-button.component';

@Component({
  selector: 'app-contact',
  imports: [ContactButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public contacts: any[] = [
    {
      contactTitle: 'Email',
      contactImgSrc: 'assets/icons/email.svg',
      contactImgAlt: 'Email',
    },
    {
      contactTitle: 'WhatsApp',
      contactImgSrc: 'assets/icons/whatsapp.svg',
      contactImgAlt: 'WhatsApp',
    },
    {
      contactTitle: 'Instagram',
      contactImgSrc: 'assets/icons/instagram.svg',
      contactImgAlt: 'Instagram',
    }
  ];
}
