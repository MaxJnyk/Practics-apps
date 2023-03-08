import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../utils/services/api";
import { SignUpInDTO } from "./sign-up-in";
import { SignUpOutDTO } from "./sign-up-out";
import { SignInInDTO } from "./sign-in.in";
import { SignInOutDTO } from "./sign-in.out";

interface SignUpParams {
  username: string;
  email: string;
  password: string;
}

interface SignInParams {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (build) => ({
    signUp: build.query<SignUpInDTO, SignUpParams>({
      query: (args) => {
        const data: SignUpOutDTO = {
          user: args,
        };
        return {
          url: "/users",
          method: "post",
          data,
        };
      },
    }),
    signIn: build.query<SignInInDTO, SignInParams>({
      query: (args) => {
        const data: SignInOutDTO = {
          user: args,
        };

        return {
          url: "/users/login",
          method: "post",
          data,
        };
      },
    }),
  }),
});

export const { useLazySignUpQuery, useLazySignInQuery } = authApi;
