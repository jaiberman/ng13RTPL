import { ApiService } from '../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-track',
  templateUrl: './dialog-track.component.html',
  styleUrls: ['./dialog-track.component.scss']
})
export class DialogTrackComponent implements OnInit {
  trackTypeList = ["Male Solo", "Female Solo", "Duet", "Duet Corus"];
  trackForm !: FormGroup;
  actionBtn : String = "Save";
  constructor(private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<DialogTrackComponent>) { }

  ngOnInit(): void {
    this.trackForm = this.formBuilder.group({
      movie: ['', Validators.required],
      song: ['', Validators.required],
      music_director: ['', Validators.required],
      o_male_signers: ['', Validators.required],
      o_female_singers: ['', Validators.required],
      year: ['', Validators.required],
      r_male_signers: ['', Validators.required],
      r_female_singers: ['', Validators.required],
      episode_number: ['', Validators.required],
      song_begin_time: ['', Validators.required],
      song_end_time: ['', Validators.required],
      yt_index: ['', Validators.required],
      song_type: ['', Validators.required],
      channel_name: ['', Validators.required]
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.trackForm.controls['movie'].setValue(this.editData.movie);
      this.trackForm.controls['song'].setValue(this.editData.song);
      this.trackForm.controls['music_director'].setValue(this.editData.music_director);
      this.trackForm.controls['o_male_signers'].setValue(this.editData.o_male_signers);
      this.trackForm.controls['o_female_singers'].setValue(this.editData.o_female_singers);
      this.trackForm.controls['year'].setValue(this.editData.year);
      this.trackForm.controls['r_male_signers'].setValue(this.editData.r_male_signers);
      this.trackForm.controls['r_female_singers'].setValue(this.editData.r_female_singers);
      this.trackForm.controls['episode_number'].setValue(this.editData.episode_number);
      this.trackForm.controls['song_begin_time'].setValue(this.editData.song_begin_time);
      this.trackForm.controls['song_end_time'].setValue(this.editData.song_end_time);
      this.trackForm.controls['yt_index'].setValue(this.editData.yt_index);
      this.trackForm.controls['song_type'].setValue(this.editData.song_type);
      this.trackForm.controls['channel_name'].setValue(this.editData.channel_name);
      
    }
  }
  addTrack(){
    // console.log(this.trackForm.value);
    if(!this.editData){
      if(this.trackForm.valid){
        this.api.postTrack(this.trackForm.value)
        .subscribe({
          next:(res) =>{
            alert("Track added successfully!");
            this.trackForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            //alert("Error while adding the record!")
            console.error("Error while adding the record!");
          }
        })
      }
    }else{
      this.updateTrack();
    }
  }


  updateTrack(){
    this.api.putTrack(this.trackForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        //alert("Track updated successfully!!");
        console.log("Track updated successfully!!");
        this.trackForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        //alert("Error while updating the record!")
        console.error("Error while updating the record!");
      }
    })
  }
}
