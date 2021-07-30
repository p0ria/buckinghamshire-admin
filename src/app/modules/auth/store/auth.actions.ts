import { createAction, props } from "@ngrx/store";

export const actionAuthLoginEmailSuccess = createAction(
    '[Auth] Login Email Success',
    props<{ email: string, rememberMe: boolean }>()
)