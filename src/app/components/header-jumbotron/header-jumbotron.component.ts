import { Component } from '@angular/core';

import { ParallaxConfig } from 'ngx-parallax';

@Component({
  selector: 'header-jumbotron',
  templateUrl: './header-jumbotron.component.html',
  styleUrls: ['./header-jumbotron.component.scss']
})
export class HeaderJumbotronComponent {
  private parallaxConfig: ParallaxConfig = {
    ratio: -0.2
  };
}
