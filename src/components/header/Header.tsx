import { FC } from "react";
import {} from "../../utils/styles";
import {
  HeaderContainer,
  HeaderNavbar,
  HeaderNavbarItem,
  HeaderNavbarLink,
  Logo,
} from "./styled";

interface HeaderProps {}

const headerNavBarItems = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Registration", path: "/registration" },
];

export const Header: FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo to="/">Practices app</Logo>
      <HeaderNavbar>
        {headerNavBarItems.map((item, index) => (
          <HeaderNavbarItem key={index}>
            <HeaderNavbarLink to={item.path}>{item.name}</HeaderNavbarLink>
          </HeaderNavbarItem>
        ))}
      </HeaderNavbar>
    </HeaderContainer>
  );
};
