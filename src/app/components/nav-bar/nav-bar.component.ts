import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('links') links: ElementRef;
  expanded = false;
  linksMaxHeight: number;

  ngAfterViewInit() {
    const linkHeight = this.links.nativeElement.childNodes[0].offsetHeight;
    const linkCount = this.links.nativeElement.childNodes.length;
    this.linksMaxHeight = linkCount * linkHeight;
    console.log(this.links);
  }

  toggleMenu() {
    this.expanded = !this.expanded;
  }
}
