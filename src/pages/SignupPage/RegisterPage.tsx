import { FC } from "react";
import { Page } from "../../utils/styles";
import { RegisterForm } from "../../common/components/forms";

interface SignupPageProps {}

export const RegisterPage: FC<SignupPageProps> = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <RegisterForm />
    </Page>
  );
};
