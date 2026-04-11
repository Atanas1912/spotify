import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
  listaObservables: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: Multimedia) { }

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status => this.state = status)

      this.listaObservables = [observer1$]
  }

  handlePosition(event: MouseEvent): void {
    console.log('Mouse Event ', event.clientX)
    const elNative:HTMLElement = this.progressBar.nativeElement
    const {x, width} = elNative.getBoundingClientRect()
    const clickX = event.clientX - x
    const percentageFromX = (clickX * 100) / width

    this.multimediaService.seekAudio(percentageFromX)

    console.log(`Click(x); ${percentageFromX}`)
  }

  ngOnDestroy(): void {
    this.listaObservables.forEach(s => s.unsubscribe())
    console.log('Destruyendo media player, Lista de observables: ', this.listaObservables.length)
  }
}
 