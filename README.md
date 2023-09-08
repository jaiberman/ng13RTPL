# Ng13RTPL (Angular13 Road Trip Play List)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Audiance
    For anyone who love to play and listen Tamil songs on long road trips.

## Requirements
    Required NodeJS 14, npm 8, Angular/Cli 13.
    run this command in your terminal or command line window 'ng --version' and make sure your Angular CLI version is atleast 13 
    
    Also install VSCode or use GEdit or any IDE/Editor. 

    I have VSCode, installed in my Linux Desktop.

## Getting Started
    Open Command Line or Terminal and navigate to your preferred folder
    1.  ng new ng13RTPL <enter>
    .. after completed scafolding the project switch to the 'ng13RTPL' folder.

    2. time to open your project in an IDE like VSCode or gedit,
    from your project folder issue:   vscode . and wait for it to open with your scafolded project. 

    3. Open termina in VSCode and type this: 
        ng serve -o  
     
    4. If all went well you should see your project in the default browser. 

    # Add @angular/material 

    1. ng add @angular/material

    # Add json-server

    2. ng install --save json-server

    # Data Model
      "movie": <string>,
      "song": <string>,
      "music_director": <string>,
      "o_male_signers": <string>,
      "o_female_singers": <string>,
      "year": <number>,
      "r_male_signers": <string>,
      "r_female_singers": <string>,
      "episode_number": <number>,
      "song_start_time": <number,
      "song_end_time": <number>,
      "yt_index": <string>,
      "song_type": <string>,
      "channel_name": <string>,
      "id": <number>
 


## Stage 2: Add Dialog Module for the CRUD

    Need to add a MatDialogModule that will hold the Data Model in a Form for entering data. 

    1. In the Terminal , enter ng g c dialogTrac  to create a dialog componet module in your project.

    2. 