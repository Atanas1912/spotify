import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared-module';

@Component({
  selector: 'app-favorite-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './favorite-page.html',
  styleUrl: './favorite-page.css',
})
export class FavoritePage {

}
