import { FC } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ButtonForm,
  InputContainer,
  InputField,
  InputLabel,
  RegistrationForm,
  RegistrationFormTitle,
  TextLink,
  WrapperLink,
} from "./styles/styled";

interface LoginFormProps {}

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const LoginForm: FC<LoginFormProps> = () => {
  const navigate = useNavigate();
  /*  const { signIn } = useAuth(); */

  const { register, handleSubmit, formState } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (values: SignInFormValues) => {
    try {
      /* await signIn(values); */
      navigate("/");
    } catch (e) {
      toast.error("Something wen't wrong. Please, try again later");
    }
  };

  return (
    <RegistrationForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <RegistrationFormTitle>Login</RegistrationFormTitle>
      <WrapperLink>
        <TextLink to="/registration"></TextLink>
      </WrapperLink>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          placeholder="Email"
          type="email"
          id="email"
          {...register("email")}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          placeholder="Password"
          type="password"
          id="password"
          {...register("password")}
        />
      </InputContainer>
      <ButtonForm type="submit" disabled={formState.isSubmitting}>
        Login
      </ButtonForm>
    </RegistrationForm>
  );
};
