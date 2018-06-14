import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJumbotronComponent } from './header-jumbotron.component';

describe('HeaderJumbotronComponent', () => {
  let component: HeaderJumbotronComponent;
  let fixture: ComponentFixture<HeaderJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderJumbotronComponent ]
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
