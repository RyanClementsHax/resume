import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Experience {
  title: String;
  description: String;
  imgUrl: String;
}

@Injectable()
export class ExperienceService {
  private experiences$: Observable<Experience[]>;

  constructor() {
    this.experiences$ = of([]);
  }

  getExperiences() {
    return this.experiences$;
  }
}
