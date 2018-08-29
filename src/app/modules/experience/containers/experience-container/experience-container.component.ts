import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ExperienceService, Experience } from '../../services/experience.service';

@Component({
  selector: 'experience-container',
  templateUrl: './experience-container.component.html',
  styleUrls: ['./experience-container.component.scss']
})
export class ExperienceContainerComponent {
  experiences$: Observable<Experience[]>;

  constructor(private experienceSerivce: ExperienceService) {
    this.experiences$ = this.experienceSerivce.getExperiences();
  }
}
