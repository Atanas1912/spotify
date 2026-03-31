import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]', //se le pone img para que solo se aplique a etiquetas img
})
export class ImgBroken {
  @Input() customImg: string = '' //si lo usamos en la vista, podemos poner una imagen personalizada en el html
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('ERROR- Esta imagen reventó ->', this.elHost)
    elNative.src = this.customImg
  }

  constructor(private elHost: ElementRef) {}

}
