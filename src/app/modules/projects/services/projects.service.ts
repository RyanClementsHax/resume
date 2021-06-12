import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

export interface Project {
  title: string
  description: string
  technologies: string[]
  imgUrl: string
  projectUrl?: string
  repoUrl?: string
}

@Injectable()
export class ProjectsService {
  private projects$: Observable<Project[]>

  constructor() {
    this.projects$ = of([
      {
        title: 'Builderbook',
        description: `I have a passion to push myself further and one area I wanted to strengthen was my understanding enterprise web application development and
         deployment so I started developing a team management and communication application to be hosted in AWS and built complete with bells and whistles like
         user session management and email templates. I can't describe to you how much fun I'm having learning all these cool things!`,
        technologies: ['React', 'NodeJS', 'Express', 'Next.js', 'Material UI', 'Typescript', 'Jest', 'Google OAuth', 'Mongo'],
        imgUrl: 'assets/img/builderbook-logo.svg',
        repoUrl: 'https://github.com/RyanClementsHax/builderbook.git'
      },
      {
        title: 'GW2Api.NET',
        description: `My favorite game in the world is Guild Wars 2. I've been playing since the beta events. I wanted to challenge my understanding of C# and rest
         while having fun with my favorite video game, so i built a modern C# api client for the game! I even took it a step further and implemented integration tests
         for all of the functionality. Funny story: there are so many that when I run them all I get throttled by them. You could say my CI pipeline DOS's their servers.`,
        technologies: ['C#', 'REST', 'Unit tests'],
        imgUrl: 'assets/img/gw2-logo.jpg',
        repoUrl: 'https://github.com/RyanClementsHax/GW2Api.NET'
      },
      {
        title: 'Catholic Gators Admin',
        description: `What started off as a senior project turned into a favorite pastime with a few friends of mine.
         This app handles the contact management for the church I went to in undergrad and is designed to help new
          freshmen get on their feet with software engineering.`,
        technologies: ['React', 'Redux', 'Typescript', 'Firebase', 'rxjs', 'Docker', 'MaterialUI', 'Travis CI'],
        imgUrl: 'assets/img/cg-admin-app.PNG',
        repoUrl: 'https://github.com/CatholicGators/CatholicGatorsAdminApp'
      },
      {
        title: 'This Website!',
        description: 'When it came time to think about career fair, I thought, "Why not build my own website!??!", and here we are.',
        technologies: ['Angular 12', 'rxjs', 'Travis CI', 'Github Pages'],
        imgUrl: 'assets/img/website.PNG',
        projectUrl: 'https://ryanclementshax.github.io/resume',
        repoUrl: 'https://github.com/RyanClementsHax/resume'
      },
      {
        title: 'Workout Planner Android App',
        description: 'I was tired of the overly complex workout apps on the app store so I built my own and had fun doing it.',
        technologies: ['Android', 'Java'],
        imgUrl: 'assets/img/workout-app-android.png',
        repoUrl: 'https://github.com/RyanClementsHax/WorkoutPlanner'
      }
    ])
  }

  getProjects() {
    return this.projects$
  }
}
