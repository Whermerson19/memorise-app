import "react-native-gesture-handler";

import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";

import theme from "./src/global/styles/theme";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { AppRoutes } from "./src/routes/app.routes";

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
      <AppRoutes />
    </ThemeProvider>
  );
}
