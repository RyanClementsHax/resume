import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPresentationComponent } from './project-presentation.component';

describe('ProjectPresentationComponent', () => {
  let component: ProjectPresentationComponent;
  let fixture: ComponentFixture<ProjectPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectPresentationComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
