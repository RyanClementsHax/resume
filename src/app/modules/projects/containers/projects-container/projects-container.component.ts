import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent {
  projects$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getProjects();
  }
}
