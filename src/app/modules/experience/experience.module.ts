import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ExperienceContainerComponent } from './containers/experience-container/experience-container.component';
import { ExperiencePresentationComponent } from './components/experience-presentation/experience-presentation.component';
import { ExperienceService } from './services/experience.service';

export const ROUTES: Routes = [
  { path: '', component: ExperienceContainerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ExperienceContainerComponent,
    ExperiencePresentationComponent
  ],
  providers: [ExperienceService]
})
export class ExperienceModule {}
