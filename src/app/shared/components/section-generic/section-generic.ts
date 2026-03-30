import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';
import { CardPlayer } from '../card-player/card-player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-generic',
  standalone: true,
  imports: [CardPlayer, CommonModule],
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css',
})
export class SectionGeneric implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big' // solo admite los valores 'small' y 'big' y por defecto, se establece big
  @Input() dataTracks: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
    
  }
}
