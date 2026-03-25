import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing-module';
import { SharedModule } from '@shared/shared-module';
import { TracksPage } from './pages/tracks-page/tracks-page';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TracksRoutingModule,
    SharedModule
  ]
})
export class TracksModule { }
