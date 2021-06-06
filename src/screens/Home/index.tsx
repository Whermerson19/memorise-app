import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/core";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import api from "../../services/api";

import {
  Container,
  Content,
  UserDecksContainer,
  UserFoldersContainer,
  HeaderCards,
  Title,
} from "./styles";

interface DecksProps {
  id: string;
  title: string;
  subtitle: string;
  user: {
    avatarURL: string;
  };
}

export function Home() {
  const [decks, setDecks] = useState<DecksProps[]>([]);

  const loadDecksFromApi = useCallback(async () => {
    const response = await api.get("/decks");
  }, []);

  useFocusEffect(useCallback(() => {}, []));

  return (
    <Container>
      <Header title="Dashboard" lastIcon="ellipsis-vertical-outline" />

      <Content>
        <UserDecksContainer>
          <HeaderCards>
            <Title>Decks</Title>
          </HeaderCards>
          <Card type="list" title="Title" subtitle="Subtitle" />
        </UserDecksContainer>

        <UserFoldersContainer>
          <HeaderCards>
            <Title>Folders</Title>
          </HeaderCards>
          <Card type="folder" title="Title" subtitle="Subtitle" />
        </UserFoldersContainer>
      </Content>
    </Container>
  );
}
