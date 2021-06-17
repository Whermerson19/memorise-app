import { useRoute } from "@react-navigation/native";
import React from "react";
import { FooterMenuIcon } from "../FooterMenuIcon";

import { Container } from "./styles";

export function FooterMenu() {
  const route = useRoute();

  const name = route.name;

  return (
    <Container>
      <FooterMenuIcon name="home" currPage={name} />
      <FooterMenuIcon name="clipboard" currPage={name} />
      <FooterMenuIcon name="plus-circle" currPage={name} />
      <FooterMenuIcon name="folder" currPage={name} />
      <FooterMenuIcon name="user" currPage={name} />
    </Container>
  );
}
