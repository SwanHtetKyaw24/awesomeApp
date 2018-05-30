import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  DeviceEventEmitter
} from "react-native";
import PushNotification from "react-native-push-notification";
import PushController from "./PushController";

export default class FirstScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state } = navigation;
    return {
      title: "First",
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
      seconds: 15,
      navigateStart: false
    };
  }

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

  pushNotiAndNav(seconds) {
    // console.log("value updated");
    this.setState({ navigateStart: true });
    PushNotification.localNotificationSchedule({
      message: "My Notification Message", // (required)
      date: new Date(Date.now() + seconds * 1000),
      data: { seconds: seconds, test: "test Value" },
      actions: '["Yes", "No"]'
    });
    if (seconds <= 10) {
      // console.warn("navigate to third screen");
      this.props.navigation.navigate({
        routeName: "ThirdScreen",
        key: "ThirdScreen"
      });
    } else {
      // console.warn("navigate to second screen");
      this.props.navigation.navigate({
        routeName: "SecondScreen",
        key: "SecondScreen"
      });
    }
  }

  controllNavigation(seconds) {
    console.warn("control navigation reached");
    if (seconds <= 10) {
      // console.warn("navigate to third screen"); // can't navigate here
      this.props.navigation.navigate({
        routeName: "ThirdScreen"
        // key: "ThirdScreen"
      });
    } else {
      // console.warn("navigate to second screen"); // can't navigate here
      this.props.navigation.navigate({
        routeName: "SecondScreen"
        // key: "SecondScreen"
      });
    }
  }

  render() {
    // console.warn(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sample push notification</Text>
        <Picker
          style={{ width: 100 }}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.pushNotiAndNav(seconds)}
        >
          <Picker.Item label="15" value={15} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="7" value={7} />
        </Picker>
        <PushController
          controllNav={seconds => this.controllNavigation(seconds)}
        />
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => PushNotification.cancelAllLocalNotifications()}
        >
          <Text>Cancel all notifications</Text>
        </TouchableOpacity>
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
