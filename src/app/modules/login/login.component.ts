import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginStateParam } from '@app/typings/login-state-param.type';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { selectQueryParam } from '../store/router.selectors';

@Component({
  selector: 'bhs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  state$: Observable<any>;
  destroyed$ = new Subject();
  LoginState = LoginStateParam;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.state$ = this.store.pipe(
      takeUntil(this.destroyed$),
      select(selectQueryParam('state')),
      map(state => state ?? LoginStateParam.EnterEmail),
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
