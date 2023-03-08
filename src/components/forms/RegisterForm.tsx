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
import { IUserProps } from "../../utils/types";

interface RegisterFormProps {
  registration?: IUserProps;
}

export const RegisterForm: FC<RegisterFormProps> = ({ registration }) => {
  console.log(registration);
  return (
    <RegistrationForm>
      <RegistrationFormTitle>Registration</RegistrationFormTitle>
      <WrapperLink>
        <TextLink to="/login">Have an account?</TextLink>
      </WrapperLink>
      <InputContainer>
        <InputLabel htmlFor="registration">Registration</InputLabel>
        <InputField placeholder="Username" type="text" id="registration" />
      </InputContainer>
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
