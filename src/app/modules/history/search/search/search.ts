import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  @Output() callbackData: EventEmitter<any> = new EventEmitter(); //Creamos un EventEmitter para emitir el término de búsqueda al componente padre

  src: string = '';
  
  constructor() { }

  callSearch(term: string): void{
    if(term.length >= 3){
      this.callbackData.emit(term); //Emite el termino para que se ejecute la función en el padre
    }
  }
}
