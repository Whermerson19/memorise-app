import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";

import { Login } from "./src/screens/Login";
import { Register } from "./src/screens/Register";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.gray} />
      {/* <Login /> */}
      {/* <Register /> */}

      {<Home />}
    </ThemeProvider>
  );
}
