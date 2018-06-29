import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationStart } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { of } from 'rxjs';

class MockRouter {
  public events = of(new NavigationStart(0, 'http://localhost:4200/login', 'imperative'));
}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [{ provide: Router, useClass: MockRouter }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set expanded to false by default', () => {
    expect(component.expanded).toBe(false);
  });

  it('should set expanded to false on NavigationStart event', () => {
    expect(component.expanded).toBe(false);
  });

  describe('toggleMenu()', () => {
    it('should toggle the expanded attribute', () => {
      expect(component.expanded).toBe(false);
      component.toggleMenu();
      expect(component.expanded).toBe(true);
    });
  });
});
