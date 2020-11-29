import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import facebook from "./screens/facebook";
import instagram from "./screens/instagram";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  facebook: { screen: facebook },
  instagram: { screen: instagram },
});

const AppContainer = createAppContainer(TabNavigator);
