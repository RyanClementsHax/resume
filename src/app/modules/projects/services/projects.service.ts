import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Project {
  title: String;
  description: String;
  imgUrl: String;
}

@Injectable()
export class ProjectsService {
  private projects: Observable<Project[]>;

  constructor() {
    this.projects = of(
      [
        {
          title: 'This Website!',
          description: 'Description of the website',
          imgUrl: '/assets/img/header.jpg'
        }
      ]
    );
  }

  getProjects() {
    return this.projects;
  }
}
