import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SocialMediaLinkComponent } from './social-media-link.component';

describe('SocialMediaLinkComponent', () => {
  let component: SocialMediaLinkComponent;
  let fixture: ComponentFixture<SocialMediaLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaLinkComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
