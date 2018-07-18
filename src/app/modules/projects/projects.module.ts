import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsContainerComponent } from './containers/projects-container/projects-container.component';
import { ProjectPresentationComponent } from './components/project-presentation/project-presentation.component';

export const ROUTES: Routes = [
  { path: '', component: ProjectsContainerComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    ProjectsContainerComponent,
    ProjectPresentationComponent
  ]
})
export class ProjectsModule { }
