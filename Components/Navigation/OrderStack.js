import { createStackNavigator } from "react-navigation";

import CoffeeCartScreen from "../CoffeeCart";
import OrderHistoryScreen from "../OrderHistory";

const OrderStack = createStackNavigator(
  {
    CoffeeCart: CoffeeCartScreen,
    OrderHistory: OrderHistoryScreen
  },
  {
    initialRouteName: "CoffeeCart",

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

export default OrderStack;
