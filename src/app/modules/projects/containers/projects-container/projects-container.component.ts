import { Component } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'projects-container',
  templateUrl: './projects-container.component.html',
  styleUrls: ['./projects-container.component.scss']
})
export class ProjectsContainerComponent {
  private projects$: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getProjects();
  }
}
