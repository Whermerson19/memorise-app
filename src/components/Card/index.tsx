import React from "react";
import Folder from "../../assets/icons/folder.png";

import {
  Container,
  ImageContainer,
  FolderImage,
  UserImage,
  InfoContainer,
  Title,
  Subtitle,
} from "./styles";

interface Props {
  type: "list" | "folder";
  title: string;
  subtitle: string;
  urlImage?: string;
}

export function Card({ type, title, subtitle, urlImage }: Props) {
  return (
    <Container>
      <ImageContainer>
        {type === "folder" ? <FolderImage source={Folder} /> : <UserImage />}
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </InfoContainer>
    </Container>
  );
}
