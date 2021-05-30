import React, { useRef, useCallback } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";

import MemoriseLogo from "../../assets/logo.png";

import {
  KeyboardContainer,
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
import { KeyboardAvoidingView, SafeAreaView, SafeAreaViewBase } from "react-native";

export function Login() {
  const handleLoginFormSubmit = useCallback(() => {
    console.log("submit");
  }, []);
  const { control, handleSubmit } = useForm();

  return (
    <>
      <Container>
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
        <Title>Login</Title>
        <Form>
          <InputsField>
            <InputForm
              placeholder="username / email"
              control={control}
              name="loginField"
              icon="log-in"
            />
            <InputForm
              placeholder="password"
              control={control}
              name="password"
              icon="lock"
            />
          </InputsField>

          <Button title="Login" onPress={handleSubmit(handleLoginFormSubmit)} />
        </Form>
      </Container>
      <Footer>
        <FooterButton>
          <FooterButtonText>Esqueçeu a senha</FooterButtonText>
        </FooterButton>

        <FooterButton>
          <FooterButtonText>Crie uma conta</FooterButtonText>
        </FooterButton>
      </Footer>
    </>
  );
}
