import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bhs-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonLayoutComponent implements OnInit {
  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }
}
