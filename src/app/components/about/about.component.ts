import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ImagePopupComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  viewPort: number = 0;
  isMobile: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    public dialog: MatDialog,) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.viewPort = window.innerWidth;
      this.isMobile = this.viewPort < 1100;
    }
  }

  public openDialog(): void {
    const dialogWidth = this.isMobile ? '60%' : '1000px';
    const dialogHeight = this.isMobile ? '550px' : 'auto';

    this.dialog.open(ImagePopupComponent, {
      minWidth: dialogWidth,
      height: dialogHeight,
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
  }
}
