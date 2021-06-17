import React from "react";

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { getNamePage } from "../../utils/getNamePage";

import { Container } from "./styles";

interface Props {
  name: "home" | "clipboard" | "plus-circle" | "folder" | "user";
  currPage: string;
}

export function FooterMenuIcon({ name, currPage }: Props) {
  const theme = useTheme();

  const namePage = getNamePage(name);

  return (
    <Container
      color={currPage === namePage ? theme.colors.primary : theme.colors.ligth}
      name={name}
      size={RFValue(40)}
    />
  );
}
