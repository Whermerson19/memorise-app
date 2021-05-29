import styled from "styled-components/native";
import { TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  padding: ${RFValue(16)}px;

  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.colors.card_background};

  border: 2px solid ${(props) => props.theme.colors.background};

  margin: ${RFValue(8)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.placeholder_text};

  margin-right: 16px;
`;

export const Input = styled(TextInput)`
  flex: 1;

  font-size: ${RFValue(22)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};

`;
