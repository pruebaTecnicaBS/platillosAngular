import { Component, OnInit, Inject, Optional } from '@angular/core';
//import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  name: any;
  img: string;
  id: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.name = data.name;
    this.img = data.img;
    this.id = data.id;
  }

  ngOnInit(): void {}
  confirmSelection(e) {
    this.dialogRef.close('d');
  }
}
