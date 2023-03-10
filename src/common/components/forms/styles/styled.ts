// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegistrationForm = styled.form`
  width: 600px;
  margin-top: 13rem;
  padding: 35px;
  border-radius: 10px;
`;

export const RegistrationFormTitle = styled.h1`
  text-align: center;
  color: #2c2c2c;
`;

export const WrapperLink = styled.div`
  text-align: center;
`;

export const TextLink = styled(Link)`
  text-decoration: none;
  color: #2aa53a;

  &:hover {
    text-decoration: underline;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin: 6px 0;
  color: #2c2c2c;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #9151d0;
  padding: 10px;
  outline: none;
  font-size: 12px;
`;

export const ButtonForm = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 500;
  color: #fff;
  margin-top: 15px;
  border-radius: 10px;
  cursor: pointer;
  background: blueviolet;
  border: none;

  &:hover {
    background: #9151d0;
    transition: 0.5s;
  }
`;
