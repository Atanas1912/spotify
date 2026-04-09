import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Multimedia {
  callback: EventEmitter<any> = new EventEmitter<any>();
  
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Valor inicial') //Hay que inicializarlo y emite el ultimo valor a los suscriptores
  //myObservable1$: Subject<any> = new Subject(); //No hay que inicializarlo
  //myObservable1$: Observable<any> = new Observable();

   constructor() {
          //BEHAVIORSUBJECT
      setTimeout(() => { 
        this.myObservable1$.next('Valor emitido') //Funciona como el Subject
      }, 2000)
          
      
          //SUBJECT
    // this.myObservable1$.next('Emitiendo valor') //funciona como un observer y observable a la vez, emite un valor y continua emitiendo valores hasta que se llame a myObservable1$.complete() o myObservable1$.error()
        
    // setTimeout(() => {
    //   this.myObservable1$.next('Emitiendo valor') //Se le pone un timeout para que se ejecute el ngOnInit del componente media-player.ts, y luego esto, ya que en los ciclos de vida, primero se ejecuta el constructor y luego en ngOnInit. Y en este caso, debe suscribirse primero antes de emitir valores
    // }, 1000)

    // setTimeout(() => {
    //   this.myObservable1$.error('Sa parao')
    // }, 2500)


        // OBSERVABLE //
  //   this.myObservable1$ = new Observable(
  //     (observer:Observer<any>) => {
  //       observer.next('Emitiendo valor') //emite un valor y continua emitiendo valores hasta que se llame a observer.complete() o observer.error()

  //       setTimeout(() => {
  //         observer.complete() //emite un valor de complete y se detiene la emisión de valores, no se pueden emitir más valores después de esto
  //       }, 2000)

  //       setTimeout(() => {
  //         observer.error('Se paró la emisión de valores') //emite un error y se detiene la emisión de valores, no se pueden emitir más valores después de esto
  //       }, 3500)
  //     }
  //   )
   }

}