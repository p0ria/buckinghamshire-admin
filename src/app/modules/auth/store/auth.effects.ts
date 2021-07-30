import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { actionAuthLoginEmailSuccess } from "./auth.actions";
import { tap } from 'rxjs/operators';
import { LoginStateParam } from "@app/typings/login-state-param.type";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router
    ) { }

    loginEmailSuccess$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionAuthLoginEmailSuccess),
            tap(_ => this.router.navigate(['/login'], { queryParams: { state: LoginStateParam.EnterPassword } }))
        ), { dispatch: false }
    )
}