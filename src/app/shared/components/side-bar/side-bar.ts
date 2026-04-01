import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { Track } from '@modules/tracks/services/track';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar implements OnInit {

  mainMenu : { 
    defaultOptions: Array<any>, accessLink: Array<any> } = { 
      defaultOptions: [], accessLink: [] 
    }

    customOptions: Array<any> = []

  constructor(private router: Router, private trackService: Track) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'home']
        // query: { pagina: 'Home'}
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square',
        router: ['/', 'auth']
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

    this.trackService.dataTracksRandom$
    .subscribe((response: any) => {
      this.customOptions.push(
        {
          name: response[0].name,
          router: ['/']
        }
      )
    })

  }

  goTo($event: any): void { //para navegar, puedo usar el  <li [routerLink]="item.router">, o también usar un método como este. Con ambos puedo pasar queryParams
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
