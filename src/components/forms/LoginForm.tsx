import { FC } from "react";
import {
  InputContainer,
  InputField,
  InputLabel,
  RegistrationForm,
  RegistrationFormTitle,
  TextLink,
  WrapperLink,
} from "./styles/styled";

interface LoginFormProps {}

export const LoginForm: FC<LoginFormProps> = () => {
  return (
    <RegistrationForm>
      <RegistrationFormTitle>Login</RegistrationFormTitle>
      <WrapperLink>
        <TextLink to="/registration">Have an account?</TextLink>
      </WrapperLink>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField placeholder="Email" type="email" id="email" />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField placeholder="Password" type="password" id="password" />
      </InputContainer>
    </RegistrationForm>
  );
};
