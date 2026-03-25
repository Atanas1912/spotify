import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBar } from './components/side-bar/side-bar';
import { MediaPlayer } from './components/media-player/media-player';
import { HeaderUser } from './components/header-user/header-user';
import { SectionGeneric } from './components/section-generic/section-generic';
import { CardPlayer } from './components/card-player/card-player';



@NgModule({
  declarations: [
    SideBar,
    MediaPlayer,
    HeaderUser,
    SectionGeneric,
    CardPlayer
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBar, //exporto el componente para usarlo en otros módulos. Ver home-module.ts imports: [ SharedModule ]
    MediaPlayer,
    HeaderUser,
    SectionGeneric,
    CardPlayer
  ]
})
export class SharedModule { }
