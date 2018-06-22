import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParallaxModule } from 'ngx-parallax';

import { AppComponent } from './containers/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderJumbotronComponent } from './components/header-jumbotron/header-jumbotron.component';
import { AboutMeComponent } from './components/about-me/about-me.component';

export const ROUTES: Routes = [
  { path: '', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderJumbotronComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    ParallaxModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
