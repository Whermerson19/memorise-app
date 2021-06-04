import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-around;

  padding: ${RFValue(35)}px;

`;

export const UserDecksContainer = styled.View`
  width: 100%;
`;

export const UserFoldersContainer = styled.View`
  width: 100%;
`;

export const HeaderCards = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: flex-end;
  justify-content: space-between;

  padding: ${RFValue(5)}px;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(25)}px;
  font-family: ${props => props.theme.fonts.medium};
`;

export const ViewAll = styled.Text`
  color: ${props => props.theme.colors.highlight_text};
  font-size: ${RFValue(14)}px;
  font-family: ${props => props.theme.fonts.regular};
`;
