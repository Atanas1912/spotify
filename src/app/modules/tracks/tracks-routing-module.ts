import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPage } from './pages/tracks-page/tracks-page';

const routes: Routes = [
  {
    path: '',
    component: TracksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
