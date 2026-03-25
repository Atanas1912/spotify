import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing-module';
import { SharedModule } from '@shared/shared-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    //SharedModule //SI QUITO ESTO, SIGUE VIENDOSE EN LA VISTA DEL COMPONENTE TRACKS
  ]
})
export class TracksModule { }
