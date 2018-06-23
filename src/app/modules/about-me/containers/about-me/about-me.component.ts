import { Component } from '@angular/core';

import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  private parallaxConfig: ParallaxConfig = {
    ratio: -0.2
  };
}
