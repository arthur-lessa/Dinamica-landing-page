import { Component } from '@angular/core';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  imports: [ImagePopupComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  viewPort: number = 0;
  isMobile: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.viewPort = window.innerWidth;
    this.isMobile = this.viewPort < 1100;
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
