import { Component, OnInit } from '@angular/core';
import { RouteInfo, Routes } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: RouteInfo[] = [];

  ngOnInit() {
    this.menuItems = Routes;
  }
}
