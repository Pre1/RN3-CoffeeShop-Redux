import React, { Component } from "react";

import { Button, Icon, Text } from "native-base";

export default class CartButton extends Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate("CoffeeCart")}
        transparent
        warning
      >
        <Icon name="cart" />
      </Button>
    );
  }
}
