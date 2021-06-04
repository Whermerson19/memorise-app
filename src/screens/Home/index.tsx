import React from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";

import {
  Container,
  Content,
  UserDecksContainer,
  UserFoldersContainer,
  HeaderCards,
  Title,
  ViewAll,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header title="Dashboard" lastIcon="ellipsis-vertical-outline" />

      <Content>
        <UserDecksContainer>
          <HeaderCards>
            <Title>Decks</Title>

            <ViewAll>view all</ViewAll>
          </HeaderCards>
          <Card type="list" title="Title" subtitle="Subtitle" />
        </UserDecksContainer>

        <UserFoldersContainer>
          <HeaderCards>
            <Title>Folders</Title>

            <ViewAll>view all</ViewAll>
          </HeaderCards>
          <Card type="folder" title="Title" subtitle="Subtitle" />
        </UserFoldersContainer>
      </Content>
    </Container>
  );
}
