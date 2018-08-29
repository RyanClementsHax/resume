import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ProjectsContainerComponent } from './projects-container.component';
import { ProjectsService } from '../../services/projects.service';
import { Subject } from 'rxjs';

class MockProjectsService {
  projects$ = new Subject();

  getProjects() {
    return this.projects$;
  }
}

describe('ProjectsContainerComponent', () => {
  let component: ProjectsContainerComponent;
  let fixture: ComponentFixture<ProjectsContainerComponent>;
  let mockProjectsService: MockProjectsService;

  beforeEach(async(() => {
    mockProjectsService = new MockProjectsService();

    TestBed.configureTestingModule({
      declarations: [ProjectsContainerComponent],
      providers: [{ provide: ProjectsService, useValue: mockProjectsService }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
