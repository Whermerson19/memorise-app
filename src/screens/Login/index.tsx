import React, { useRef, useCallback } from "react";

import { Container } from "./styles";
import { Input } from "../../components/Input";

export function Login() {
  const handleLoginFormSubmit = useCallback(() => {
    console.log("submit");
  }, []);

  return (
    <Container>
      <Input icon="log-in" name="loginField" placeholder="username / email" />
      <Input icon="lock" name="loginField" placeholder="password" />
    </Container>
  );
}
