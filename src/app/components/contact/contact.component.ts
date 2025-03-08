import { Component } from '@angular/core';
import { ContactButtonComponent } from '../contact-button/contact-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ContactButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public contacts: any[] = [
    {
      contactTitle: 'Instagram',
      contactImgSrc: 'assets/icons/instagram.svg',
      contactImgAlt: 'Instagram',
      buttonClass: 'instagram',
    },
    {
      contactTitle: 'Email',
      contactImgSrc: 'assets/icons/email.svg',
      contactImgAlt: 'Email',
      buttonClass: 'email'
    },
    {
      contactTitle: 'WhatsApp',
      contactImgSrc: 'assets/icons/whatsapp.svg',
      contactImgAlt: 'WhatsApp',
      buttonClass: 'whatsapp'
    },
  ];

  constructor() { }

  ngOnInit() { }

  onContactClick(contact: any) {   

    if (contact.contactTitle === 'Instagram') {
        window.open('https://www.instagram.com/dinamicacontratos', '_blank');
    } else if (contact.contactTitle === 'Email') {
        window.location.href = 'mailto:thurlessaf@gmail.com';
    } else if (contact.contactTitle === 'WhatsApp') {
        window.open('https://wa.me/5511956788884', '_blank');
    }
  }
}
