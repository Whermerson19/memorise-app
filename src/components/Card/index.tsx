import React from "react";
import Folder from "../../assets/icons/folder/folder.png";
import UnknowUser from "../../assets/icons/unknow-user/unknow-user.png";

import {
  Container,
  ImageContainer,
  Image,
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
        {type === "folder" ? (
          <Image source={Folder} />
        ) : (
          <Image
            source={UnknowUser}
            style={{
              resizeMode: "contain",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        )}
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </InfoContainer>
    </Container>
  );
}
