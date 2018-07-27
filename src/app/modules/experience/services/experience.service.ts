import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Experience {
  title: String;
  startDate: Date;
  endDate: Date;
  description: String;
  technologies: String[];
  imgUrl: String;
  linkUrls?: String[];
}

@Injectable()
export class ExperienceService {
  private experiences$: Observable<Experience[]>;

  constructor() {
    this.experiences$ = of(
      [
        {
          title: 'Ultimate Software Intern',
          startDate: new Date(2017, 5),
          endDate: new Date(2017, 8),
          description: `I collaborated to develop an internal standup tool called UltiDash which integrated into Jira and the Aha! API's.`,
          technologies: ['C#', 'Angular', 'Web Api', 'Unity', 'Entity'],
          imgUrl: '/assets/img/header.jpg'
        },
        {
          title: 'Infinite Energy Intern',
          startDate: new Date(2016, 5),
          endDate: new Date(2016, 10),
          description: 'I made a killer custom hybrid app with a fully functional back end and admin web app to manage it',
          technologies: ['Angular 1.6', 'Cordova', 'Bootstrap', 'C#', 'Web Api', 'Entity', 'Unity', 'Unit Testing'],
          imgUrl: '/assets/img/header.jpg',
          linkUrls: [
            'https://play.google.com/store/apps/details?id=com.infiniteenergy.industrial.mobile&hl=en_US',
            'https://itunes.apple.com/us/app/infinite-energy-industrial/id1125474901?mt=8'
          ]
        }
      ]
    );
  }

  getExperiences() {
    return this.experiences$;
  }
}
