import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface LinkUrl {
  url: string;
  text: string;
  disabledTitle?: string;
}

export interface Experience {
  title: String;
  company: String;
  position: String;
  startDate: Date;
  endDate: Date;
  description: String;
  technologies: String[];
  imgUrl: String;
  linkUrls?: LinkUrl[];
}

@Injectable()
export class ExperienceService {
  private experiences$: Observable<Experience[]>;

  constructor() {
    this.experiences$ = of(
      [
        {
          title: 'NU Nav',
          company: 'Ultimate Software',
          position: 'Intern',
          startDate: new Date(2018, 5),
          endDate: new Date(2018, 8),
          description: `Ideated and implemented a design for an admin application 
            used to manage the complex data of a cross-domain menu structure using Stencil.js and Angular 5.`,
          technologies: ['Stencil.js', 'Angular 5', 'Web Components'],
          imgUrl: 'assets/img/ultimate-software-logo.jpg'
        },
        {
          title: 'Transactor',
          company: 'Infinite Energy',
          position: 'Intern',
          startDate: new Date(2017, 8),
          endDate: new Date(2017, 12),
          description: `Maintained a C# back end system called Transactor responsible for processing thousands of 
            customer energy usage data. Improved the company's internal tool used to manage customers and their data 
            by adding features that assisted customer representatives in delivering unparalleled customer service.`,
          technologies: ['C#', 'ASP.NET'],
          imgUrl: 'assets/img/infinite-energy-logo.png'
        },
        {
          title: 'UltiDash',
          company: 'Ultimate Software',
          position: 'Intern',
          startDate: new Date(2017, 5),
          endDate: new Date(2017, 8),
          description: `I collaborated to develop an internal standup tool called UltiDash which integrated into Jira and the Aha! API's.`,
          technologies: ['C#', 'Angular', 'Web Api', 'Unity', 'Entity'],
          imgUrl: 'assets/img/ultimate-software-logo.jpg'
        },
        {
          title: 'Customer Website',
          company: 'Infinite Energy',
          position: 'Intern',
          startDate: new Date(2016, 8),
          endDate: new Date(2017, 5),
          description: `Engineered the payment feature on the company website so the customers can make payments and 
            manage payment options.`,
          technologies: ['Angular.js v1.6', 'C#', 'Web Api', 'Unity', 'Entity'],
          imgUrl: 'assets/img/infinite-energy-logo.png',
          linkUrls: [
            {
              url: 'https://my.infiniteenergy.com/#!/login#shell',
              text: 'Live website'
            }
          ]
        },
        {
          title: 'Infinite Energy Industrial',
          company: 'Infinite Energy',
          position: 'Intern',
          startDate: new Date(2016, 5),
          endDate: new Date(2016, 10),
          description: 'I made a killer custom hybrid app with a fully functional back end and admin web app to manage it',
          technologies: ['Angular 1.6', 'Cordova', 'Bootstrap', 'C#', 'Web Api', 'Entity', 'Unity', 'Unit Testing'],
          imgUrl: 'assets/img/infinite-energy-industrial-ios.PNG',
          linkUrls: [
            {
              url: 'https://play.google.com/store/apps/details?id=com.infiniteenergy.industrial.mobile&hl=en_US',
              text: 'Google Play',
              disabledTitle: 'The company no longer wanted to support Android. :('
            },
            {
              url: 'https://itunes.apple.com/us/app/infinite-energy-industrial/id1125474901?mt=8',
              text: 'App Store'
            }
          ]
        }
      ]
    );
  }

  getExperiences() {
    return this.experiences$;
  }
}
