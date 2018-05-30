import React from "react";
import PushNotification from "react-native-push-notification";
import { withNavigation } from "react-navigation";

class PushController extends React.Component {
  constructor() {
    super();
    this.state = {
      startNavigate: false
    };
    this.setAndNav = this.setAndNav.bind(this);
  }
  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        // console.warn("NOTIFICATION:", notification.data.seconds);
        console.log("navigation...", this.props.navigation);

        if (notification.data.seconds <= 10) {
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

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      }
    });
  }

  setAndNav() {
    this.setState({ startNavigate: true });
  }

  render() {
    return null;
  }
}

export default withNavigation(PushController);
