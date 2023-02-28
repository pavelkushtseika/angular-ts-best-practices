import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string,
  title: string,
  icon: string,
  class: string
}

export const Routes: RouteInfo[] = [
  { path: '/home',      title: 'Home',      icon: 'home',        class: '' },
  { path: '/posts',     title: 'Posts',     icon: 'view_list',     class: '' },
  { path: '/gallery',   title: 'Gallery',   icon: 'image',       class: '' },
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: RouteInfo[] = [];

  ngOnInit() {
    this.menuItems = Routes;
  }
}
