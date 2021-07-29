import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bhs-common-layout-header',
  templateUrl: './common-layout-header.component.html',
  styleUrls: ['./common-layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonLayoutHeaderComponent implements OnInit {
  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
