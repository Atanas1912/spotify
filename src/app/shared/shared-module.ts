import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './components/side-bar/side-bar';
import { MediaPlayer } from './components/media-player/media-player';
import { HeaderUser } from './components/header-user/header-user';



@NgModule({
  declarations: [
    SideBar,
    MediaPlayer,
    HeaderUser
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBar //exporto el componente para usarlo en otros módulos. Ver home-module.ts imports: [ SharedModule ]
  ]
})
export class SharedModule { }
