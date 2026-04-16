import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, ViewChild, ElementRef, inject, DestroyRef, effect } from '@angular/core';
import { Multimedia } from '@shared/services/multimedia';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { destroyCustom } from '@core/utils/destroyCustom';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [ NgTemplateOutlet, CommonModule ],
  templateUrl: './media-player.html',
  styleUrl: './media-player.css',
})
export class MediaPlayer {
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('')
  listaObservables: Array<Subscription> = []
  state: string = 'paused'

  multimediaService = inject(Multimedia)
  destroyCustom = destroyCustom()

  constructor() {
    effect(() => {
      const state = this.multimediaService.playerStatusSignal()
      this.state = state
    })
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
}
 