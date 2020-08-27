import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

export interface LinkUrl {
  url: string
  text: string
  disabledTitle?: string
}

export interface Experience {
  title: string
  company: string
  position: string
  startDate: Date
  endDate?: Date
  description: string
  technologies: string[]
  imgUrl: string
  linkUrls?: LinkUrl[]
}

@Injectable()
export class ExperienceService {
  private experiences$: Observable<Experience[]>

  constructor() {
    this.experiences$ = of([
      {
        title: 'Renewals and Retentions Revamp',
        company: 'Infinite Energy',
        position: 'Dev Assistant',
        startDate: new Date(2020, 4),
        description: `Innovated and revamped the legacy system that the Renewals and Retentions (RnR) team, uses to keep track
         of the company's accounts that need to be renewed or retained. My primary responsibily was being the front end tech lead
         and pioneered the company's adoption of the new front end tech stack.`,
        technologies: ['React', 'Redux', 'Redux Toolkit', '.NET Core', 'C#', 'Entity DB First', 'Kubernetes'],
        imgUrl: 'assets/img/infinite-energy-logo.png'
      },
      {
        title: 'FtpDownloads',
        company: 'Infinite Energy',
        position: 'Intern',
        startDate: new Date(2019, 8),
        endDate: new Date(2020, 4),
        description: `Developed from scratch a service to handle file transfers of various sizes between us and third party
         systems. The microservice dealt with problems such as legacy code integration, message queues, connection
         management, Kubernetes, and Docker.`,
        technologies: ['.NET Core', 'C#', 'Microservice', 'Entity Code First', 'RabbitMQ', 'Docker', 'Kubernetes'],
        imgUrl: 'assets/img/infinite-energy-logo.png'
      },
      {
        title: 'Common Messaging Platform',
        company: 'Ultimate Software',
        position: 'Intern',
        startDate: new Date(2019, 5),
        endDate: new Date(2019, 8),
        description: `Deployed and managed in house messaging systems for the rest of the domain teams in the company to use. Such systems
         and libraries include a Schema Registry, Kafka connect libraries, encryption/decryption libraries, RabbitMQ libraries, and spring
         starter libraries. All of this is written in Java using Spring`,
        technologies: ['Kafka', 'RabbitMQ', 'Spring', 'Java'],
        imgUrl: 'assets/img/kafka-logo.png'
      },
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
        description: `Collaborated to develop an internal standup tool called UltiDash which integrated into Jira and the Aha! API's.`,
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
        description: 'I made a killer custom hybrid app with a fully functional back end and admin web app to manage it.',
        technologies: [
          'Angular 1.6',
          'Cordova',
          'Bootstrap',
          'C#',
          'Web Api',
          'Entity',
          'Unity',
          'Unit Testing'
        ],
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
    ])
  }

  getExperiences() {
    return this.experiences$
  }
}
