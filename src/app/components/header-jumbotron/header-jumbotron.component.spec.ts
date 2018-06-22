import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJumbotronComponent } from './header-jumbotron.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderJumbotronComponent', () => {
  let component: HeaderJumbotronComponent;
  let fixture: ComponentFixture<HeaderJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderJumbotronComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
