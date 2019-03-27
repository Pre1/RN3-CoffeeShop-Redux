import { createAppContainer } from "react-navigation";

import BottomNav from "./BottomTabNav";

const AppContainer = createAppContainer(BottomNav);

export default AppContainer;

// import { createStackNavigator, createAppContainer } from "react-navigation";

// import LoginScreen from "../Login";
// import HomepageScreen from "../HomePage";
// import CoffeListScreen from "../CoffeeList";
// import CoffeeDetailScreen from "../CoffeeDetail";
// import CoffeeCartScreen from "../CoffeeCart";

// const baseStack = createStackNavigator(
//   {
//     Login: LoginScreen,

//     CoffeList: CoffeListScreen,
//     CoffeeDetail: CoffeeDetailScreen,
//     CoffeeCart: CoffeeCartScreen
//   },
//   {
//     initialRouteName: "Login",

//     defaultNavigationOptions: {
//       headerTintColor: "white",
//       headerTitleStyle: {
//         fontWeight: "bold"
//       },
//       headerStyle: {
//         backgroundColor: "rgb(20, 90, 100)"
//       }
//     },
//     cardStyle: {
//       backgroundColor: "rgb(20, 90, 100)"
//     }
//   }
// );

// const AppContainer = createAppContainer(baseStack);

// export default AppContainer;

/// OLD ///
