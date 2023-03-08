import { Route, Routes } from "react-router-dom";
import { FC, ReactNode } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { GlobalStyle } from "./utils/styles";
import { LoginPage } from "./pages/SigninPage/LoginPage";
import { RegisterPage } from "./pages/SignupPage/RegisterPage";
import { Header } from "./components/header";

interface RoutesProps {
  children?: ReactNode;
  location?: Partial<Location> | string;
}

export const App: FC<RoutesProps> = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
      </Routes>
    </>
  );
};
