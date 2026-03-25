import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  standalone: false,
  templateUrl: './section-generic.html',
  styleUrl: './section-generic.css',
})
export class SectionGeneric implements OnInit {
  @Input() title: string = ''

  constructor() { }

  ngOnInit(): void {
    
  }
}
