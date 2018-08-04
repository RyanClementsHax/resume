import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ContactMeComponent } from './containiers/contact-me/contact-me.component';

export const ROUTES: Routes = [
  { path: '', component: ContactMeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [ContactMeComponent]
})
export class ContactMeModule {}
