import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from "@shared/shared-module";
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks-model';
import { Track } from '../services/track';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './tracks-page.html',
  styleUrl: './tracks-page.css',
})
export class TracksPage implements OnInit, OnDestroy{

  tracksTrending: Array<TrackModel> = [] //creo arrays vacíos para luego llenarlos con los datos del json
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = [] //creo un array para guardar las suscripciones a los observables, para luego poder desuscribirme en el ngOnDestroy

  constructor(private trackService: Track) { } //inyecto el servicio Track para poder acceder a los observables que contienen los datos del json 

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$ //me suscribo al observable dataTracksTrending$ del servicio Track, que contiene los datos del json, y guardo la suscripción en la variable observer1$
    .subscribe(response => { //cuando el observable emite un valor, se ejecuta esta función, que recibe el valor emitido como parámetro, en este caso un array de objetos de tipo TrackModel
      this.tracksTrending = response //le asigno al array tracksTrending el valor del observable, que es un array de objetos de tipo TrackModel, usando la sintaxis de spread operator para crear un nuevo array con los datos del observable, y evitar problemas de referencia
      console.log(response)
    })

    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRandom = [... this.tracksRandom, ... response] //Concateno el nuevo array con el anterior para no perder los datos anteriores
      console.log("Response observer2", response)
    })

    this.listObservers$ = [observer1$, observer2$] //guardo las suscripciones en el array listObservers$ para luego poder desuscribirme en el ngOnDestroy
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(sub => sub.unsubscribe()) //me desuscribo de todos los observables a los que me he suscrito
  }

}
