import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) {}
  title = 'moments';

  // openDialog() {
  //   this.dialog.open(MessagesComponent);
  // }

  // openSnackBar() {
  //   this._snackBar.openFromComponent(MessagesComponent, {
  //     duration: 300000
  //   });
  // }




}
