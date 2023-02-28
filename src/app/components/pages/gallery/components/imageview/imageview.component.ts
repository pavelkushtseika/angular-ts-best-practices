import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageInfo } from '../../types/image.interface';

@Component({
  selector: 'app-imageview',
  templateUrl: './imageview.component.html',
  styleUrls: ['./imageview.component.scss']
})
export class ImageviewComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ImageviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageInfo
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
