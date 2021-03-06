import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ExperiencePresentationComponent } from './experience-presentation.component';

describe('ExperiencePresentationComponent', () => {
  let component: ExperiencePresentationComponent;
  let fixture: ComponentFixture<ExperiencePresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencePresentationComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
