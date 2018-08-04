import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './modules/about-me/containers/about-me/about-me.component';
import { AboutMeModule } from './modules/about-me/about-me.module';

export const ROUTES: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', loadChildren: './modules/projects/projects.module#ProjectsModule' },
  { path: 'experience', loadChildren: './modules/experience/experience.module#ExperienceModule' },
  { path: 'contact-me', loadChildren: './modules/contact-me/contact-me.module#ContactMeModule' },
  { path: '**', pathMatch: 'full', redirectTo: 'about-me' }
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
export class AppModule {}
