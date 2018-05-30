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

export default class ThirdScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "Third",
      // headerTitleStyle: styles.headerTitleStyle,
      headerStyle: {
        // backgroundColor: Colors.header,
        elevation: 0
      },
      headerLeft: <View />
      // headerTintColor: Colors.text
    };
  };
  constructor() {
    super();
    this.state = {
      seconds: 7
    };
  }

  pushNotiAndNav(seconds) {
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + seconds * 1000)
    });
    this.props.navigation.navigate({
      routeName: "SecondScreen",
      key: "SecondScreen"
    });
  }

  render() {
    // console.warn(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ThirdScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
