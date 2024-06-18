import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  @ViewChild('show') Menu: ElementRef;
  @ViewChild('sidebar_ul') sidebar_ul: ElementRef;
  @ViewChild('rightsectionsidebar') rightsectionsidebar: ElementRef;
  @ViewChild('container') container: ElementRef;
  isHovered = false;
  ishovered2 = false;
  isSidebarVisible = false; // New property to track sidebar visibility

  showContent() {
    this.isHovered = true;
    console.log('we are inside ');
  }

  showContent2() {
    this.ishovered2 = true;
    console.log('we are inside ');
  }

  hideContent() {
    this.isHovered = false;
  }

  hideContent2() {
    this.ishovered2 = false;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    const displayStyle = this.isSidebarVisible ? 'flex' : 'none';

    this.Menu.nativeElement.style.display = displayStyle;
    this.sidebar_ul.nativeElement.style.display = displayStyle;
    this.rightsectionsidebar.nativeElement.style.display = displayStyle;
  }
}
