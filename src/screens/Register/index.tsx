import React, { useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTheme } from 'styled-components'

import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";

import MemoriseLogo from "../../assets/logo.png";

import {
  Container,
  LogoContainer,
  Logo,
  Form,
  Title,
  InputsField,
  Footer,
  FooterButton,
  FooterButtonText,
} from "./styles";
import { StatusBar } from "react-native";

export function Register() {

  const theme = useTheme()

  const handleLoginFormSubmit = useCallback(() => {
    console.log("submit");
  }, []);
  const { control, handleSubmit } = useForm();

  return (
    <Container>
      <StatusBar 
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <LogoContainer>
        <Logo
          source={MemoriseLogo}
          style={{
            resizeMode: "contain",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
        />
      </LogoContainer>
      <Title>Register</Title>
      <Form>
        <InputsField>
          <InputForm
            placeholder="username"
            control={control}
            name="username"
            icon="user"
          />

          <InputForm
            placeholder="email"
            control={control}
            name="email"
            icon="mail"
          />

          <InputForm
            placeholder="password"
            control={control}
            name="password"
            icon="lock"
          />
        </InputsField>

        <Button title="Register" onPress={handleSubmit(handleLoginFormSubmit)} />
      </Form>
      <Footer>
        <FooterButton>
          <FooterButtonText>Log In</FooterButtonText>
        </FooterButton>
      </Footer>
    </Container>
  );
}
