import React from "react";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Home() {

  return (
    <Container>
      <Header title="Dashboard" lastIcon="ellipsis-vertical-outline" />
    </Container>
  );
}
