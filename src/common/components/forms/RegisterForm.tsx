import { FC } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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
import { useAuth } from "../../../utils/hooks/useAuth";
import { ErrorsList } from "../error-list";

interface RegisterFormProps {}

interface RegistrationFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const RegisterForm: FC<RegisterFormProps> = () => {
  const navigate = useNavigate();
  /*  const { signUp } = useAuth(); */
  const { register, handleSubmit, formState } = useForm<RegistrationFormValues>(
    {
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
      resolver: yupResolver(validationSchema),
    },
  );

  const onSubmit = async (values: RegistrationFormValues) => {
    try {
      /* await signUp(values); */
      navigate("/");
    } catch (e) {
      toast.error("Something went wrong. Please, try again later");
    }
  };

  return (
    <RegistrationForm onSubmit={handleSubmit(onSubmit)} noValidate>
      <RegistrationFormTitle>Registration</RegistrationFormTitle>
      <WrapperLink>
        <TextLink to="/login">Have an account?</TextLink>
      </WrapperLink>
      <ErrorsList errors={formState.errors} />
      <InputContainer>
        <InputLabel htmlFor="registration">Registration</InputLabel>
        <InputField
          placeholder="Username"
          type="text"
          id="registration"
          {...register("username")}
        />
      </InputContainer>
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
        Registration
      </ButtonForm>
    </RegistrationForm>
  );
};
