import { Component } from '@angular/core';

import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  parallaxConfig: ParallaxConfig = {
    initialValue: 50,
    ratio: -0.2
  };
}
