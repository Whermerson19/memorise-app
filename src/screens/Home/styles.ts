import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${props => props.theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-between;

`;

export const UserDecksContainer = styled.View`
  width: 100%;
`;

export const UserFoldersContainer = styled.View``;
