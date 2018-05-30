import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity
} from "react-native";
import PushNotification from "react-native-push-notification";
import PushController from "./PushController";

export default class FirstScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "Second",
      // headerTitleStyle: styles.headerTitleStyle,
      headerStyle: {
        // backgroundColor: Colors.header,
        elevation: 0
      },
      headerLeft: (
        <TouchableOpacity /* onPress={() => navigation.openDrawer()} */>
          {/* <EntypoIcon
            name="menu"
            size={Metrics.icons.small}
            color="black"
            style={{ marginLeft: Metrics.marginMedium }}
          /> */}
          <Text>Hello</Text>
        </TouchableOpacity>
      )
      // headerTintColor: Colors.text
    };
  };
  constructor() {
    super();
    this.state = {
      seconds: 7
    };
  }
  render() {
    // console.warn(this.props);
    return (
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
        onPress={() =>
          this.props.navigation.navigate({
            routeName: "FirstScreen",
            key: "FirstScreen"
          })
        }
      >
        <Text>First screen</Text>
      </TouchableOpacity>
    );
  }
}
