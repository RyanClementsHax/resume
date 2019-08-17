import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('links', { static: false }) links: ElementRef;

  expanded = false;
  linksMaxHeight: number;

  constructor(private router: Router) {
    this.router.events.pipe(
        filter((event: Event) => event instanceof NavigationStart)
      )
      .subscribe(() => {
        this.expanded = false;
      });
  }

  ngAfterViewInit() {
    const linkHeight = this.links.nativeElement.childNodes[0].offsetHeight;
    const linkCount = this.links.nativeElement.childNodes.length;
    this.linksMaxHeight = linkCount * linkHeight;
  }

  toggleMenu() {
    this.expanded = !this.expanded;
  }
}
