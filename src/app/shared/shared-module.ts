import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './components/side-bar/side-bar';
import { CardPlayer } from './components/card-player/card-player';
import { HeaderUser } from './components/header-user/header-user';
import { MediaPlayer } from './components/media-player/media-player';
import { PlayListBody } from './components/play-list-body/play-list-body';
import { PlayListHeader } from './components/play-list-header/play-list-header';
import { SectionGeneric } from './components/section-generic/section-generic';
import { RouterModule } from '@angular/router';
import { OrderListPipe } from './pipes/order-list-pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBar, //importo y exporto los componentes de este módulo, así, en las lógicas de los componentes, con solo importar el módulo puedo usar los componentes de este módulo
    CardPlayer,
    HeaderUser,
    MediaPlayer,
    PlayListBody,
    PlayListHeader,
    SectionGeneric,
    OrderListPipe,
    RouterModule
  ],
  exports: [
    SideBar, 
    CardPlayer,
    HeaderUser,
    MediaPlayer,
    PlayListBody,
    PlayListHeader,
    SectionGeneric,
    OrderListPipe
  ]
})
export class SharedModule { }
