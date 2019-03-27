import { createStackNavigator } from "react-navigation";

import CoffeeListScreen from "../CoffeeList";
import CoffeeDetailScreen from "../CoffeeDetail";

const CoffeeStack = createStackNavigator(
  {
    CoffeeList: CoffeeListScreen,
    CoffeeDetail: CoffeeDetailScreen
  },
  {
    initialRouteName: "CoffeeList",

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

export default CoffeeStack;
