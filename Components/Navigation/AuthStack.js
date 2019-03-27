import { createStackNavigator } from "react-navigation";

import LoginScreen from "../Login";
import ProfileScreen from "../Profile";

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Login",

    defaultNavigationOptions: {
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    }
  }
);

// const AppContainer = createAppContainer(baseStack);

export default AuthStack;
