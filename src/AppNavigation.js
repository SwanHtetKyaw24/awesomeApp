import React from "react";
import { createStackNavigator } from "react-navigation";
import FirstScreen from "./FirstScreen";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";

const AppNavigation = createStackNavigator(
  {
    FirstScreen: { screen: FirstScreen },
    SecondScreen: { screen: SecondScreen },
    ThirdScreen: { screen: ThirdScreen }
  },
  {
    initialRouteName: "FirstScreen",
    gesturesEnabled: false,
    headerTitleAllowFontScaling: false
  }
);

export default AppNavigation;
