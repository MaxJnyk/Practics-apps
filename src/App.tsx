import { Route, Routes } from "react-router-dom";
import { FC, ReactNode } from "react";
import { HomePage } from "./pages/HomePage/HomePage";

interface RoutesProps {
  children?: ReactNode;
  location?: Partial<Location> | string;
}

export const App: FC<RoutesProps> = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);
