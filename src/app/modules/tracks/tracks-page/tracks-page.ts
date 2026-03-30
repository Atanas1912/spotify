import { Component, OnInit } from '@angular/core';
import { SharedModule } from "@shared/shared-module";
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks-model';

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css',
})
export class TracksPage implements OnInit{

  mockTracksList: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
    const { data }:any = (dataRaw as any).default
    this.mockTracksList = data
  }

}
