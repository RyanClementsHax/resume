import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  title: String;
  description: String;
  technologies: String[];
  imgUrl: String;
  projectUrl?: String;
  repoUrl?: String;
}

@Injectable()
export class ProjectsService {
  private projects$: Observable<Project[]>;

  constructor() {
    this.projects$ = of(
      [
        {
          title: 'This Website!',
          description: 'When it came time to think about career fair, I thought, "Why not build my own website!??!", and here we are.',
          technologies: ['Angular', 'rxjs'],
          imgUrl: '/assets/img/header.jpg',
          projectUrl: 'http://localhost:4200',
          repoUrl: 'https://github.com/RyanClementsHax/resume'
        },
        {
          title: 'Workout Planner Android App',
          description: 'I was tired of the overly complex workout apps on the app store so I built my own and had fun doing it.',
          technologies: ['Android', 'Java'],
          imgUrl: '/assets/img/header.jpg',
          repoUrl: 'https://github.com/RyanClementsHax/WorkoutPlanner'
        }
      ]
    );
  }

  getProjects() {
    return this.projects$;
  }
}
