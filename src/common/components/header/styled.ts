import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
  margin: 0 auto;
`;

export const Logo = styled(Link)`
  font-size: 2.5rem;
  font-weight: bold;
  text-decoration: none;
  font-family: Roboto, sans-serif;
  color: #9151d0;
`;
export const HeaderNavbar = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavbarItem = styled.li`
  font-weight: 500;
  list-style: none;
  transition: 3s;
`;

export const HeaderNavbarLink = styled(NavLink)`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.3);
  text-decoration: none;

  &:hover,
  &:focus {
    color: #9151d0;
    transition: 0.5s;
  }

  &.active {
    color: #9151d0;
  }
`;
