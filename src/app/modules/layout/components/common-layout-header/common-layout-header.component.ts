import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'bhs-common-layout-header',
  templateUrl: './common-layout-header.component.html',
  styleUrls: ['./common-layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonLayoutHeaderComponent implements OnInit {
  avatarVisible: boolean = false;
  @ViewChild('avatar', { read: ElementRef }) avatarElRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.avatarElRef.nativeElement.contains(event.target)) {
      this.avatarVisible = false;
    }
  }
}
