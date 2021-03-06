import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { Subject } from 'rxjs';

import { ExperienceContainerComponent } from './experience-container.component';
import { ExperienceService } from '../../services/experience.service';

class MockExperienceService {
  experiences$ = new Subject();

  getExperiences() {
    return this.experiences$;
  }
}

describe('ExperienceContainerComponent', () => {
  let component: ExperienceContainerComponent;
  let fixture: ComponentFixture<ExperienceContainerComponent>;
  let mockExperienceService;

  beforeEach(() => {
    mockExperienceService = new MockExperienceService();

    TestBed.configureTestingModule({
      declarations: [ExperienceContainerComponent],
      providers: [{ provide: ExperienceService, useValue: mockExperienceService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ExperienceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
