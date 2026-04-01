import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@core/models/tracks-model';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root',
})
export class Track {
  
  dataTracksTrending$ : Observable<TrackModel[]> = of([]) //Le pongo el $ para indicar que es un observable (bien visto por la comunidad)
  dataTracksRandom$ : Observable<TrackModel[]> = of([]) //creo 2 observables vacíos para luego llenarlos 

  constructor() {
    const { data } = (dataRaw as any).default //a data le asigno el valor del json, diciendole que lo trate como any para evitar problemas de tipado, y accediendo a la propiedad default que es donde se encuentra el json
    
    this.dataTracksTrending$ = of(data) //le asigno al observable el valor del json, usando of para convertirlo en un observable

    this.dataTracksRandom$ = new Observable((observer) => { //creo un nuevo observable, que recibe una función con un observer como parámetro, el observer es el encargado de emitir los valores del observable

      const trackExample: TrackModel = { //creo un objeto de tipo TrackModel con datos de ejemplo, para simular una respuesta de una API
        _id: 1,
        name: 'Track Example',
        album: 'Album Example',
        cover: 'https://via.placeholder.com/150',
        url: 'https://www.example.com/track-example',
      }

      observer.next([trackExample]) //emito el valor del observable, en este caso un array con el objeto de ejemplo, usando next para emitir el valor
    })
  }
}
