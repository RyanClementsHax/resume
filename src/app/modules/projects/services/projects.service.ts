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
        title: 'Catholic Gators Admin',
        description: `What started off as a senior project turned into a favorite pastime with a few friends of mine.
         This app handles the contact management for the church I went to in undergrad and is designed to help new
          freshmen get on their feet with software engineering.`,
        technologies: ['React', 'Redux', 'Firebase', 'rxjs', 'Docker', 'MaterialUI'],
        imgUrl: 'assets/img/cg-admin-app.PNG',
        repoUrl: 'https://github.com/CatholicGators/CatholicGatorsAdminApp'
      },
      {
        title: 'This Website!',
        description: 'When it came time to think about career fair, I thought, "Why not build my own website!??!", and here we are.',
        technologies: ['Angular 6', 'rxjs'],
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
