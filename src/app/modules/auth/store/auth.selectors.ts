import { RootState } from "@app/modules/store/root.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_FEATURE_NAME = 'auth';

export const selectAuthState = createFeatureSelector<RootState, AuthState>(AUTH_FEATURE_NAME);

export const selectUser = createSelector(
    selectAuthState,
    state => state.user
)