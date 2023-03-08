import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpInDTO } from "./api/sign-up-in";
import { RootState } from "../store";

interface AuthState {
  user: SignUpInDTO["user"] | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SignUpInDTO["user"] | null>) => {
      if (action.payload === null) {
        // eslint-disable-next-line no-param-reassign
        state.user = null;
      }

      state.user = {
        ...action.payload,
      };
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const { setUser } = authSlice.actions;
