import { ApiService } from './services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogTrackComponent } from './dialog-track/dialog-track.component';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng13RTPL';

  displayedColumns: string[] = ['episode_number', 'song', 'movie', 'channel_name', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService){

  }

  ngOnInit(): void {
    this.getAllTracks();
  }

  openDialog() {
    this.dialog.open(DialogTrackComponent, {
      width: '39%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllTracks();
      }
    })
  }

  getAllTracks(){
    this.api.getTrack()
    .subscribe({
      next: (res)=>{
        //console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        //alert("Error while fetching data!");
        console.error("Error while fetching data!");
      }
    })
  }

  editTrack(row: any){
    this.dialog.open(DialogTrackComponent, {
      width:'39%',
      data: row
    }).afterClosed().subscribe(val=>{
        if(val==='update'){
          this.getAllTracks();
        }
    })
  }

  deleteTrack(id: number){
    this.api.deleteTrack(id)
    .subscribe({
      next:(res)=>{
        //alert("Record deleted successfully!!");
        console.log("Record deleted successfully!!");
        this.getAllTracks();
      },
      error:()=>{
        //alert("Error while deleting the records");
        console.log("Record deleted successfully!!");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
