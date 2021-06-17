import styled from "styled-components/native";

import { Feather, Ionicons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  background-color: ${(props) => props.theme.colors.gray};

  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(20)}px;
`;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: space-around;

  flex-direction: row;
`;

export const ArrowIcon = styled(Feather)`
  color: ${(props) => props.theme.colors.text};

  font-size: ${RFValue(25)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  margin-right: 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};

  font-size: ${RFValue(25)}px;
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const LastIcon = styled(Ionicons)`
  color: ${(props) => props.theme.colors.text};

  font-size: ${RFValue(25)}px;
  font-family: ${(props) => props.theme.fonts.regular};
`;
