import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactMeComponent } from './containiers/contact-me/contact-me.component';
import { SocialMediaLinkComponent } from './components/social-media-link/social-media-link.component';

export const ROUTES: Routes = [
  { path: '', component: ContactMeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ContactMeComponent, SocialMediaLinkComponent]
})
export class ContactMeModule {}
