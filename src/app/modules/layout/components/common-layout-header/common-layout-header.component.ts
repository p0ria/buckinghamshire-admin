import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bhs-common-layout-header',
  templateUrl: './common-layout-header.component.html',
  styleUrls: ['./common-layout-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonLayoutHeaderComponent implements OnInit {
  avatarVisible$ = new BehaviorSubject<any>(false);
  notificationVisible$ = new BehaviorSubject<any>(false);
  @ViewChild('avatar', { read: ElementRef }) avatarElRef: ElementRef;
  @ViewChild('avatarTitle', { read: ElementRef }) avatarTitleElRef: ElementRef;
  @ViewChild('avatarContent', { read: ElementRef }) avatarContentElRef: ElementRef;
  @ViewChild('notification', { read: ElementRef }) notificationElRef: ElementRef;
  @ViewChild('notificationTitle', { read: ElementRef }) notificationTitleElRef: ElementRef;
  @ViewChild('notificationContent', { read: ElementRef }) notificationContentElRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!this.avatarElRef.nativeElement.contains(event.target) &&
      !this.avatarTitleElRef?.nativeElement.contains(event.target) &&
      !this.avatarContentElRef?.nativeElement.contains(event.target)) {
      this.avatarVisible$.next(false);
    }
    if (!this.notificationElRef.nativeElement.contains(event.target) &&
      !this.notificationTitleElRef?.nativeElement.contains(event.target) &&
      !this.notificationContentElRef?.nativeElement.contains(event.target)) {
      this.notificationVisible$.next(false);
    }
  }

  toggleAvatarVisible = () => {
    this.avatarVisible$.next(!this.avatarVisible$.value);
  }

  toggleNotificationVisible = () => {
    this.notificationVisible$.next(!this.notificationVisible$.value);
  }
}
