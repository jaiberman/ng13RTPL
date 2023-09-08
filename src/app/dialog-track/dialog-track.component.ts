import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-track',
  templateUrl: './dialog-track.component.html',
  styleUrls: ['./dialog-track.component.scss']
})
export class DialogTrackComponent implements OnInit {
  trackTypeList = ["Male Solo", "Female Solo", "Duet", "Duet Corus"];
  trackForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

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
    })
  }
  addTrack(){
    console.log(this.trackForm.value);
  }
}
