import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css',
})
export class SectionGeneric implements OnInit {
  @Input() title: string = ''
  @Input() mode: 'small' | 'big' = 'big' // solo admite los valores 'small' y 'big' y por defecto, se establece big
  @Input() dataTracks: Array<any> = []

  constructor() { }

  ngOnInit(): void {
    
  }
}
