import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegistrationForm = styled.form`
  width: 600px;
  margin: 5rem;
  background: #e1e7e7;
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
  color: brown;
`;

export const InputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  margin: 6px 0;
  color: #2c2c2c;
`;

export const InputField = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  outline: none;
  font-size: 12px;
`;
