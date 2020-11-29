import React from "react";
import { Text, View } from "react-native";

export default class Page1 extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Welcome To Facebook</Text>
      </View>
    );
  }
}
