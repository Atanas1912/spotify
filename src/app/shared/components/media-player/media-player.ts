import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [ NgTemplateOutlet, CommonModule ],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer implements OnInit {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13',
    name: 'Cancion',
    album: 'Album',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
