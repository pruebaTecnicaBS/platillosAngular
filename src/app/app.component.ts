import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Recetas';

  constructor(public http: HttpClient, public dialog: MatDialog) {}
  ngOnInit(): void {}

  openEmojiDialog() {
    let dialog = this.dialog.open(DialogComponent);
    dialog.afterClosed().subscribe((selection) => {
      console.log(selection);
    });
  }
}
