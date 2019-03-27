// import React, { Component } from "react";

// // NativeBase Components
// import {
//   Left,
//   Text,
//   Button,
//   Body,
//   List,
//   ListItem,
//   Form,
//   Label,
//   CardItem,
//   Card,
//   Content,
//   Header
// } from "native-base";

// class Profile extends Component {
//   static navigationOptions = {};

//   render() {
//     return (
//       <Content padder style={{ backgroundColor: "rgb(20, 90, 100)" }}>
//         <Header style={{ backgroundColor: "rgb(20, 90, 100)" }} />
//         <Left />
//         <Body style={{ marginTop: 40 }}>
//           <Card>
//             <CardItem body>
//               <Text style={{ fontWeight: "bold" }}>Username</Text>
//             </CardItem>
//           </Card>
//         </Body>
//       </Content>
//     );
//   }
// }

// export default Profile;

import React, { Component } from "react";
import styles from "./styles";
import { Text, View, Image, TouchableOpacity } from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image style={styles.avatar} source={require("./pfp.png")} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Abdullah A</Text>
            <Text style={styles.info}>Full Stack Developer</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>

            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
