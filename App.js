/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { DeviceEventEmitter } from "react-native";
import PushNotification from "react-native-push-notification";
import AppNavigation from "./src/AppNavigation";

/* const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
}); */

export default class App extends Component {
  componentWillMount() {
    PushNotification.registerNotificationActions([
      "Accept",
      "Reject",
      "Yes",
      "No"
    ]);
    DeviceEventEmitter.addListener("notificationActionReceived", function(
      action
    ) {
      console.warn("Notification action received: " + action);
      const info = JSON.parse(action.dataJSON);
      if (info.action == "Accept") {
        // Do work pertaining to Accept action here
      } else if (info.action == "Reject") {
        // Do work pertaining to Reject action here
      }
      // Add all the required actions handlers
    });
  }
  render() {
    return <AppNavigation />;
  }
}
