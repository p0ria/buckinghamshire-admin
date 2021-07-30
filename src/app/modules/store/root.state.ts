import { AUTH_FEATURE_NAME } from "../auth/store/auth.selectors";
import { AuthState } from "../auth/store/auth.state";

export interface RootState {
    [AUTH_FEATURE_NAME]: AuthState,
    router: null
}
