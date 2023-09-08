import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogTrackComponent } from './dialog-track/dialog-track.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng13RTPL';

  constructor(private dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(DialogTrackComponent, {
      width: '39%'
    });
  }
}
