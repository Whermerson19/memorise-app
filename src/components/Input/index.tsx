import React, { useEffect, useRef } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container, Icon, Input as TextInput } from "./styles";

interface IProps extends TextInputProps {
  icon?: string;
}

export function Input({ icon, ...rest }: IProps) {
  const theme = useTheme();

  return (
    <Container>
      {icon && <Icon name={icon} />}
      <TextInput
        placeholderTextColor={theme.colors.placeholder_text}
        {...rest}
      />
    </Container>
  );
}
