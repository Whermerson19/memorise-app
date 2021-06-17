import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Decks } from "../screens/Decks";
import { Folders } from "../screens/Folders";
import { Profile } from "../screens/Profile";

const Stack = createStackNavigator();

export function ApplicationRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Home} />
        <Stack.Screen name="Decks" component={Decks} />
        <Stack.Screen name="Folders" component={Folders} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
