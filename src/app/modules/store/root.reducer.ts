import { ActionReducerMap } from "@ngrx/store";
import { authReducer } from "@auth/store/auth.reducers";
import { RootState } from "./root.state";
import { routerReducer } from "@ngrx/router-store";
import { AUTH_FEATURE_NAME } from "../auth/store/auth.selectors";

export const rootReducer: ActionReducerMap<RootState> = {
    [AUTH_FEATURE_NAME]: authReducer,
    router: routerReducer
};