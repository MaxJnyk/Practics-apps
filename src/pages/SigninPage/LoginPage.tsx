import { FC } from "react";
import { Page } from "../../utils/styles";
import { LoginForm } from "../../components/forms";

interface SigninPageProps {}

export const LoginPage: FC<SigninPageProps> = () => {
  return (
    <Page display="flex" justifyContent="center" alignItems="center">
      <LoginForm />
    </Page>
  );
};
