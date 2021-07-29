import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


interface MenuItem {
  title: string
  icon: string
  link: string
}
@Component({
  selector: 'bhs-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonLayoutComponent implements OnInit {
  isCollapsed = false;
  menu: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard'
    },
    {
      title: 'Escalations',
      icon: 'exclamation-circle',
      link: '/escalations'
    },
    {
      title: 'PRO Carers',
      icon: 'user',
      link: '/carers'
    },
    {
      title: 'Service Users',
      icon: 'team',
      link: '/patients'
    },
    {
      title: 'Agencies',
      icon: 'medicine-box',
      link: '/agencies'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
