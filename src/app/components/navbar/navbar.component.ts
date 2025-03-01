import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ngOnInit() {}

  isMobile: boolean = window.innerWidth < 1100;
  isMenuOpen: boolean = false;
  
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = (event.target as Window).innerWidth < 1100;

    if (!this.isMobile) {
      this.isMenuOpen = false;    
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToTop() {
    window.scrollTo({top: 0});
  }
}
