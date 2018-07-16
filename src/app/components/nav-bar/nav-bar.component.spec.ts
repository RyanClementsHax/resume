import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationStart } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
import { Subject } from 'rxjs';

class MockRouter {
  events = new Subject();
}

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: MockRouter;

  beforeEach(async(() => {
    router = new MockRouter();

    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [{ provide: Router, useValue: router }]
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
    component.toggleMenu();

    router.events.next(new NavigationStart(0, 'http://localhost:4200/login', 'imperative'));

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
