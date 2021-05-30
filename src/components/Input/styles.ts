import styled from "styled-components/native";
import { TextInput } from "react-native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;

  padding: 16px;

  flex-direction: row;
  align-items: center;

  background-color: ${(props) => props.theme.colors.card_background};

  border: 2px solid ${(props) => props.theme.colors.card_background};

  margin: ${RFValue(8)}px 0;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.placeholder_text};

  margin-right: 16px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
`;
