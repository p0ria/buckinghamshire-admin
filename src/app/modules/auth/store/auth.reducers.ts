import { Action, createReducer, on } from "@ngrx/store";
import { actionAuthLoginEmailSuccess } from "./auth.actions";
import { AuthState, initialAuthState } from "./auth.state";

const reducer = createReducer(
    initialAuthState,
    on(actionAuthLoginEmailSuccess,
        (state, action) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.email
                },
                rememberMe: action.rememberMe
            }
        })
)

export function authReducer(state: AuthState | undefined, action: Action) {
    return reducer(state, action);
}