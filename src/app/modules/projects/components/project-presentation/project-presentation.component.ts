import { Component, Input } from '@angular/core';
import { Project } from '../../services/projects.service';

@Component({
  selector: 'project-presentation',
  templateUrl: './project-presentation.component.html',
  styleUrls: ['./project-presentation.component.scss']
})
export class ProjectPresentationComponent {
  @Input() project: Project = {
    title: '',
    description: '',
    imgUrl: ''
  };
}
