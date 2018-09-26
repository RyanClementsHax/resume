import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectPresentationComponent } from './project-presentation.component';

describe('ProjectPresentationComponent', () => {
  let component: ProjectPresentationComponent;
  let fixture: ComponentFixture<ProjectPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPresentationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
