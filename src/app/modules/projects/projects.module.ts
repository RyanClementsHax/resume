import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsContainerComponent } from './containers/projects-container/projects-container.component';
import { ProjectPresentationComponent } from './components/project-presentation/project-presentation.component';
import { ProjectsService } from './services/projects.service';

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
  ],
  providers: [ProjectsService]
})
export class ProjectsModule { }
