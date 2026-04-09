import { Component, OnInit, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks-model';
import { CommonModule } from '@angular/common';
import { OrderListPipe } from '@shared/pipes/order-list-pipe';

@Component({
  selector: 'app-play-list-body',
  standalone: true,
  imports: [CommonModule, OrderListPipe],
  templateUrl: './play-list-body.html',
  styleUrl: './play-list-body.css',
})
export class PlayListBody implements OnInit {
  @Input() tracks: TrackModel[] = [] 
  optionSort: { property: string | null, order: string } = {property: null, order: 'asc'}

  constructor() {}

  ngOnInit(): void {
  }

  changeSort(property:string) : void {
     const { order } = this.optionSort
     this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
     }
  }
 
}
