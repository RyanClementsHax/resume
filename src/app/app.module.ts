import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParallaxModule } from 'ngx-parallax';

import { AppComponent } from './containers/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderJumbotronComponent } from './components/header-jumbotron/header-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderJumbotronComponent
  ],
  imports: [
    BrowserModule,
    ParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
