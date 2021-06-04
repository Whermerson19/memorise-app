import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(150)}px;

  padding: ${RFValue(25)}px;

  border: 3px solid ${props => props.theme.colors.primary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.View``;

export const FolderImage = styled.Image`
  margin-right: ${RFValue(50)}px;
`;

export const UserImage = styled.View``;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.primary};
`;
