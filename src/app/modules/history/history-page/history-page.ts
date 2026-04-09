import { Component } from '@angular/core';
import { SideBar } from '@shared/components/side-bar/side-bar';
import { MediaPlayer } from '@shared/components/media-player/media-player';
import { SearchService } from '../services/search';
import { Search } from '../search/search/search';
import { PlayListBody } from '@shared/components/play-list-body/play-list-body';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [ SideBar, MediaPlayer, PlayListBody, Search, AsyncPipe ],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage {

  listResults$: Observable<any> = of([]);

  constructor(private searchService: SearchService) {}

  receiveData(event: string): void { //Recibe el término de búsqueda emitido por el componente hijo
    this.listResults$ = this.searchService.searchTracks$(event) //Llama al servicio de búsqueda con el término recibido y asigna el resultado a listResults$ para mostrarlo en el componente
    
    //   .subscribe(({ data }) => { //Suscribe a la respuesta del servicio para obtener los resultados de la búsqueda
    //     this.listResults = data //Asigna los resultados a la propiedad listResults para mostrarlos en el componente
    // })
  }
}