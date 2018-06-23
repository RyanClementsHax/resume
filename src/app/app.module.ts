import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './modules/about-me/containers/about-me/about-me.component';
import { AboutMeModule } from './modules/about-me/about-me.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'about-me' },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AboutMeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
