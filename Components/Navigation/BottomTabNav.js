import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import React from "react";
import AuthStack from "./AuthStack";
import CoffeeStack from "./CoffeeStack";
import OrderStack from "./OrderStack";

const BottomTab = createBottomTabNavigator(
  {
    Login: AuthStack,
    Coffee: CoffeeStack,
    Cart: OrderStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      console.log("ZERO => defaultNavigationOptions => navigation", navigation);
      return {
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;

          switch (routeName) {
            case "Login":
              return (
                <Icon
                  name={routeName.toLowerCase()}
                  type="AntDesign"
                  style={{ color: tintColor, marginTop: 20 }}
                />
              );
            case "Coffee":
              return (
                <Icon
                  name={routeName.toLowerCase()}
                  type="FontAwesome"
                  style={{ color: tintColor, marginTop: 20 }}
                />
              );
            case "Cart":
              return (
                <Icon
                  name="shopping-cart"
                  type="FontAwesome"
                  style={{ color: tintColor, marginTop: 20 }}
                />
              );
          }
        }
      };
    },

    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#000000",
      showLabel: false,
      style: {
        backgroundColor: "#59413D"
      }
    }
  }
);

export default BottomTab;
