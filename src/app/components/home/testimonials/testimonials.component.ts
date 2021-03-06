import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
      '<img src="../../../../assets/left.png">',
      '<img src="../../../../assets/right.png">',
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      560: {
        items: 2,
        stagePadding: 0,
      },
      720: {
        items: 2,
        stagePadding: 70,
      },
      1080: {
        items: 3,
        stagePadding: 70,
      }
    },
    nav: true,
  };
  people: any = [
    {
      id: 1,
      body: 'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'Amy Goldberg',
      role: 'COO at Slack',
      imgSrc: '../../../../assets/amy.png',
    },
    {
      id: 2,
      body: 'Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.',
      name: 'Lina Sloan',
      role: 'Content Writer at Uber',
      imgSrc: '../../../../assets/lina.png',
    },
    {
      id: 3,
      body: 'Sociosqu habitasse vulputate odio nisi phasellus. Cras luctus sit leo pharetra nec semper commodo rutrum aptent feugiat.',
      name: 'Jon Jandali',
      role: 'CTO at Loom',
      imgSrc: '../../../../assets/jon.png',
    },
    {
      id: 4,
      body: 'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'John Doe',
      role: 'CTO at Facebook',
      imgSrc: '../../../../assets/john.png',
    },
    {
      id: 5,
      body: 'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'Amy Goldberg',
      role: 'COO at Slack',
      imgSrc: '../../../../assets/amy.png',
    },
    {
      id: 6,
      body: 'Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.',
      name: 'Lina Sloan',
      role: 'Content Writer at Uber',
      imgSrc: '../../../../assets/lina.png',
    },
    {
      id: 7,
      body: 'Sociosqu habitasse vulputate odio nisi phasellus. Cras luctus sit leo pharetra nec semper commodo rutrum aptent feugiat.',
      name: 'Jon Jandali',
      role: 'CTO at Loom',
      imgSrc: '../../../../assets/jon.png',
    },
    {
      id: 8,
      body: 'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'John Doe',
      role: 'CTO at Facebook',
      imgSrc: '../../../../assets/john.png',
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
