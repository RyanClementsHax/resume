import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxModule } from 'ngx-parallax';

import { AboutMeComponent } from './containers/about-me/about-me.component';

@NgModule({
  imports: [
    CommonModule,
    ParallaxModule
  ],
  declarations: [
    AboutMeComponent
  ]
})
export class AboutMeModule {}
