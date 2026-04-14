import { Component, ElementRef } from '@angular/core';
import { ImgBroken } from './img-broken';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({ //Componente que debe contener una etiqueta html para esta prueba de la imagen
  template:'<img class="testing-directive" appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock: any = null
}

describe('ImgBroken', () => {

  let component : TestComponent;
  let fixture : ComponentFixture<TestComponent> //Component fixture obtiene los métodos necesarios para interactuar con las propiedades del componente para el testing

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        TestComponent,
        ImgBroken
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges() //Detecta los cambios en el componente y actualiza la vista, es necesario para que se apliquen las directivas y se renderice el HTML correctamente
  })

  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBroken(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent debería instanciarse correctamente', () => {
    expect(component).toBeTruthy()
  })

  it('Directiva debería cambiar la imagen por la imagen de respaldo', () => {
    //Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src //obtengo la url antes de ser cambiada por la directiva
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src //obtengo la url después de ser cambiada por la directiva

      expect(afterImgSrc).toEqual('https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png')
    }, 1000)

  })

}); 
