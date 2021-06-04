import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;

  padding: ${RFValue(25)}px;  

  background-color: ${props => props.theme.colors.gray};

  border: 2px solid ${props => props.theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  width: 30%;

  margin-right: ${RFValue(40)}px;
`;

export const Image = styled.Image``;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.primary};
`;
