import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.titlespot}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Calibri",
          fontWeight: "bold",
        }}
      >
        HIGH LOW GAME
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  titlespot: {
    width: "100%",
    height: "10%",
    backgroundColor: "#56bfd6",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
