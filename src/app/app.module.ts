import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutMeComponent } from './modules/about-me/containers/about-me/about-me.component';
import { AboutMeModule } from './modules/about-me/about-me.module';

export const ROUTES: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./modules/experience/experience.module').then(
        m => m.ExperienceModule
      )
  },
  {
    path: 'contact-me',
    loadChildren: () =>
      import('./modules/contact-me/contact-me.module').then(
        m => m.ContactMeModule
      )
  },
  { path: '**', pathMatch: 'full', redirectTo: 'about-me' }
];

@NgModule({
  declarations: [AppComponent, NavBarComponent],
  imports: [BrowserModule, AboutMeModule, RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
