import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-popup',
  imports: [CommonModule],
  templateUrl: './image-popup.component.html',
  styleUrl: './image-popup.component.scss'
})
export class ImagePopupComponent implements OnInit, OnDestroy{

  public isMobile: boolean = false;

  ngOnInit() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile.bind(this));  
    
  }  
  
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkMobile.bind(this)); 
  }

  constructor(private dialogRef: MatDialogRef<ImagePopupComponent>) { }

  close(): void {
    this.dialogRef.close();
  }

  checkMobile() {
    this.isMobile = window.innerWidth < 1100;
  }
  
}
