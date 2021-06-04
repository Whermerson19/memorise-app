import React from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import {
  Container,
  Content,
  UserDecksContainer,
  UserFoldersContainer,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header title="Dashboard" lastIcon="ellipsis-vertical-outline" />

      <Content>
        <UserDecksContainer>
          <Card type="list" title="Title" subtitle="Subtitle" />
        </UserDecksContainer>

        <UserFoldersContainer></UserFoldersContainer>
      </Content>
    </Container>
  );
}
