import { User } from "@app/typings/user.type";

export interface AuthState {
    user: User;
    token?: string | null;
    rememberMe: boolean
}

export const initialAuthState: AuthState = {
    user: {},
    rememberMe: false
}