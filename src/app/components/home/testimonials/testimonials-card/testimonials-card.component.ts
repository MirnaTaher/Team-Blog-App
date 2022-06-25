import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials-card',
  templateUrl: './testimonials-card.component.html',
  styleUrls: ['./testimonials-card.component.scss'],
})
export class TestimonialsCardComponent implements OnInit {
  @Input() testimonial: any = [];
  constructor() {}

  ngOnInit(): void {}
}
