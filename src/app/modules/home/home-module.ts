import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './pages/home-page/home-page';
import { SharedModule } from '@shared/shared-module';


@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule //importo el modulo entero para usar los componentes exportados
]
})
export class HomeModule { }
