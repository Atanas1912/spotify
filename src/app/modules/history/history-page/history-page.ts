import { Component } from '@angular/core';
import { SideBar } from '@shared/components/side-bar/side-bar';
import { MediaPlayer } from '@shared/components/media-player/media-player';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [ SideBar, MediaPlayer ],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage {

}
