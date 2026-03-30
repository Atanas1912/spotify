import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';
import { ImgBroken } from "@shared/directivas/img-broken";

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [CommonModule, ImgBroken],
  templateUrl: './card-player.html',
  styleUrl: './card-player.css',
})
export class CardPlayer implements OnInit{
@Input() mode: 'small' | 'big' = 'small';
@Input() track: TrackModel = {_id: 0, name: '', album: '', url: '', cover: ''};

constructor() { }

ngOnInit(): void {
  
}

}
