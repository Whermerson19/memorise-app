import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Decks } from "../screens/Decks";
import { Folders } from "../screens/Folders";
import { Profile } from "../screens/Profile";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createBottomTabNavigator();

export function AppRoutes() {
  const height = RFValue(80);

  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          inactiveTintColor: theme.colors.ligth,
          style: {
            height,
            backgroundColor: `${theme.colors.gray}`,
          },
          showLabel: false,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather size={RFValue(40)} color={color} name="home" />
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather size={RFValue(40)} color={color} name="clipboard" />
            ),
          }}
          name="Decks"
          component={Decks}
        />

        {/* <Feather name="plus-circle" /> */}

        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather size={RFValue(40)} color={color} name="folder" />
            ),
          }}
          name="Folders"
          component={Folders}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather size={RFValue(40)} color={color} name="user" />
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
