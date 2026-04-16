import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';
import { ImgBroken } from "@shared/directivas/img-broken";
import { Multimedia } from '@shared/services/multimedia';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBroken],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css',
})
export class CardPlayer implements OnInit{
  @Input({required: true}) mode: 'small' | 'big' = 'small';
  @Input({required: true, alias:'trackObject'}) track: TrackModel = {_id: 0, name: '', album: '', url: '', cover: ''};

  constructor(private multimediaService:Multimedia) { }

  ngOnInit(): void {
    
  }

  sendPlay(track:TrackModel): void {
    this.multimediaService.trackInfo$.next(track)
    console.log('mandando cancion a la barra -> ', track)
  }

}
