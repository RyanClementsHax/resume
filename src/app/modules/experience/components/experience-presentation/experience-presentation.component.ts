import { Component, Input } from '@angular/core';
import { Experience } from '../../services/experience.service';

@Component({
  selector: 'experience-presentation',
  templateUrl: './experience-presentation.component.html',
  styleUrls: ['./experience-presentation.component.scss']
})
export class ExperiencePresentationComponent {
  @Input() experience: Experience = {
    title: '',
    startDate: null,
    endDate: null,
    description: '',
    technologies: [],
    imgUrl: ''
  };
}
