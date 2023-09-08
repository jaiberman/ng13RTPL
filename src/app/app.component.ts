import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogTrackComponent } from './dialog-track/dialog-track.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng13RTPL';

  constructor(private dialog: MatDialog, private api: ApiService){

  }

  ngOnInit(): void {
    this.getAllTracks();
  }

  openDialog() {
    this.dialog.open(DialogTrackComponent, {
      width: '39%'
    });
  }

  getAllTracks(){
    this.api.getTrack()
    .subscribe({
      next: (res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Error while fetching data!");
      }
    })
  }
}
