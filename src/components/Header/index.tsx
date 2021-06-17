import React from "react";

import { Container, TitleContainer, ArrowIcon, Title, LastIcon } from "./styles";

interface Props {
  title: string;
  lastIcon: "ellipsis-vertical-outline" | "checkmark-outline";
}

export function Header({ title, lastIcon }: Props) {
  return (
    <Container>
      <TitleContainer>
        <ArrowIcon name="arrow-left" />
        <Title>{title}</Title>
      </TitleContainer>
      <LastIcon name={lastIcon} />
    </Container>
  );
}
