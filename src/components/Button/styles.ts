import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;

  background-color: ${props => props.theme.colors.primary};

  padding: ${RFValue(21)}px;

  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.medium};
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(20)}px;
`