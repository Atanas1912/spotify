import { Component } from '@angular/core';
import { FavoritePage } from '@modules/favorites/favorite-page/favorite-page';
import { HistoryPage } from '@modules/history/history-page/history-page';
import { TracksPage } from '@modules/tracks/tracks-page/tracks-page';
import { SharedModule } from '@shared/shared-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TracksPage, FavoritePage, HistoryPage, SharedModule,RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
