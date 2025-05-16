import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@api/types";

interface UserState {
    user: UserType | undefined | null,
    accessToken: string,
}

const initialState: UserState = {
    user: undefined,
    accessToken: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateToken(state, action: PayloadAction<UserState>) {
            state.accessToken = action.payload.accessToken;
            if (action.payload.user) {
                state.user = { ...action.payload.user };
            } else {
                state.user = undefined;
            }
        },
        deleteToken(state) {
            state.accessToken = '';
            state.user = undefined;
        }
    }
});

export const { updateToken, deleteToken } = userSlice.actions;
export default userSlice.reducer;