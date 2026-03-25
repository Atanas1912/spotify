import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  standalone: false,
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer implements OnInit {
  mockCover: any = {
    cover: 'https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13',
    name: 'Cancion',
    album: 'Album'
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
