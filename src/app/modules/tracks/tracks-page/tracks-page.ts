import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SharedModule } from "@shared/shared-module";
import { TrackModel } from '@core/models/tracks-model';
import { Track } from '../services/track';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule, HttpClientModule],
  standalone: true,
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush //esto hace que el componente solo se vuelva a renderizar cuando cambie alguna de sus propiedades, lo que mejora el rendimiento, pero hay que tener cuidado de marcar para check cuando se actualizan las propiedades desde un observable
})

export class TracksPage implements OnInit, OnDestroy{

  tracksTrending: Array<TrackModel> = [] //creo arrays vacíos para luego llenarlos con los datos del json
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = [] //creo un array para guardar las suscripciones a los observables, para luego poder desuscribirme en el ngOnDestroy

  constructor(private trackService: Track, private cdr: ChangeDetectorRef) { } //inyecto el servicio Track para poder acceder a los observables que contienen los datos del json 

  // ngOnInit(): void {
  //   this.trackService.getAllTracks$()
  //     .subscribe((response: TrackModel[]) => {
  //     this.tracksTrending = response
  //     this.cdr.markForCheck() //refresca el componente para que renderice los nuevos cambios por el metodo skipById
  //     console.log('Data normal', response)
  //     })

  //   this.trackService.getAllRandom$()
  //     .subscribe((response: TrackModel[]) => {
  //     this.tracksRandom = response
  //     this.cdr.markForCheck()
  //     console.log('Data random', response)
  //     })
  // }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => {
      this.tracksRandom = response
      this.cdr.markForCheck()
      console.log('Data random', response)
    })
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe()) //me desuscribo de todos los observables para evitar fugas de memoria
  }

}
