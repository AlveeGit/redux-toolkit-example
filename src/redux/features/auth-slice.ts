import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
};

const initialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false,
  } as AuthState,
} as InitialStateType;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },

    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          ...state.value,
          isAuth: true,
          username: action.payload,
        },
      };
    },

    toggleModerator: (state) => {
      return {
        value: {
          ...state.value,
          isModerator: !state.value.isModerator,
        },
      };
    }

  },
});

export const { logOut, login, toggleModerator } = auth.actions;
export default auth.reducer;