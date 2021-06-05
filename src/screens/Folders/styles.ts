import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};

  flex: 1;
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.highlight_text}
`;