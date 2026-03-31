import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';
import { Multimedia } from '@shared/services/multimedia';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [ NgTemplateOutlet, CommonModule ],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab6761610000517481f47f44084e0a09b5f0fa13',
    name: 'Cancion',
    album: 'Album',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listaObservables: Array<Subscription> = []

  constructor(private multimediaService: Multimedia) { }

  ngOnInit(): void {
    const observer1$ : Subscription = this.multimediaService.callback.subscribe(
      (response:TrackModel) => {
        console.log('Recibiendo cancion: ', response)
      }
    )

    this.listaObservables = [ observer1$ ]
    console.log('Lista de observables: ', this.listaObservables.length)
  }

  ngOnDestroy(): void {
    this.listaObservables.forEach(s => s.unsubscribe())
    console.log('Destruyendo media player, Lista de observables: ', this.listaObservables.length)
  }
}
