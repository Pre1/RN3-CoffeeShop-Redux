import React, { Component } from "react";

// NativeBase Components
import {
  Left,
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  CardItem,
  Card,
  Content,
  Header
} from "native-base";

class OrderHistory extends Component {
  static navigationOptions = {};

  render() {
    return (
      <Content padder style={{ backgroundColor: "rgb(20, 90, 100)" }}>
        <List>
          <ListItem>
            <Text>Item 1</Text>
          </ListItem>

          <ListItem>
            <Text>Item 2</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default OrderHistory;
