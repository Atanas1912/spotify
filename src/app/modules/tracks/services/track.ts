import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { TrackModel } from '@core/models/tracks-model';

@Injectable({
  providedIn: 'root',
})
export class Track {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> { //promesa que recibe un array de tracks y un id, y devuelve un nuevo array sin el track con el id especificado
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })  
  }

  getAllTracks$(): Observable<any> { 
    return this.httpClient.get(`${this.URL}/tracks`)//devuelve un observable con la respuesta de la petición GET a la URL, concatenandole /tracks
    .pipe(
      map(({ data } : any) => {
        return data
      })
    )
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`) //devuelve un observable con la respuesta de la petición GET a la URL, concatenandole /tracks
    .pipe(
      mergeMap(({ data } : any) => this.skipById(data as TrackModel[], 1)),
      //  map((dataRevertida) => { 
      //    return dataRevertida.filter((track:TrackModel) => track._id !== 1) // filtra el array para eliminar el track con id 1
      //  })
      catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
    )
  }
}
