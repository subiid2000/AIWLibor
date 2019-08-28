import { Component, OnInit } from '@angular/core';

export const ROUTES = [
  { path: '/dashboard', title: 'Home', icon: 'dashboard', children: null },
  { path: '/help', title: 'My Work', icon: 'dashboard', children: null },
  { path: '/help', title: 'Upload Contract', icon: 'dashboard', children: null },
  { path: '/help', title: 'Train New Topic', icon: 'dashboard', children: null },
  { path: '/help', title: 'Help', icon: 'dashboard', children: null },
  { path: '/help', title: 'About', icon: 'dashboard', children: null }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  }
}
