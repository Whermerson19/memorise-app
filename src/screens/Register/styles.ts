import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(25)}px 0 0 0;
`;

export const LogoContainer = styled.View`
  width: ${RFValue(250)}px;
  height: ${RFValue(100)}px;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
  width: 100%;

  justify-content: space-between;
  align-items: center;

  padding: 0 ${RFValue(50)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.text};
`;

export const InputsField = styled.View`
  width: 100%;

  margin-bottom: ${RFValue(30)}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;

  border-top-width: 3px;
  border-color: ${(props) => props.theme.colors.card_background};
  border-style: solid;

  background-color: ${(props) => props.theme.colors.background};
`;

export const FooterButton = styled.TouchableOpacity`
  width: 100%;

  align-items: center;
  justify-content: center;

  padding: ${RFValue(25)}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const FooterButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.medium};
`;
