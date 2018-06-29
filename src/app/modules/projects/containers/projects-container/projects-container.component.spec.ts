import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsContainerComponent } from './projects-container.component';

describe('ProjectsContainerComponent', () => {
  let component: ProjectsContainerComponent;
  let fixture: ComponentFixture<ProjectsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsContainerComponent ]
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
