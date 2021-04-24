import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const OptionButton = (props) => {
  return (
    <TouchableHighlight
      activeOpacity={0.4}
      underlayColor="#f5f5f5"
      style={props.style}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Calibri",
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableHighlight>
  );
};

export default OptionButton;

const styles = StyleSheet.create({});
