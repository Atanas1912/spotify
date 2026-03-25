import { Component, OnInit } from '@angular/core';
import { SharedModule } from "@shared/shared-module";

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule], //
  standalone: true,
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css',
})
export class TracksPage implements OnInit{

  mockTracksList = [
    {
      name:'BEBE OFICIAL',
    },
    {
      name:'BEBE OFICIAL',
    },
    {
      name:'BEBE OFICIAL',
    }
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
