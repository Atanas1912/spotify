import { Component } from '@angular/core';
import { TracksPage } from '@modules/tracks/tracks-page/tracks-page';
import { SharedModule } from '@shared/shared-module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TracksPage, SharedModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
