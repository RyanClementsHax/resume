import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectPresentationComponent } from './project-presentation.component';
import { Project } from '../../services/projects.service';

describe('ProjectPresentationComponent', () => {
  let component: ProjectPresentationComponent;
  let fixture: ComponentFixture<ProjectPresentationComponent>;
  let project: Project;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPresentationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    project = {
      title: '',
      description: '',
      imgUrl: ''
    };
    fixture = TestBed.createComponent(ProjectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
