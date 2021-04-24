import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Card = (props) => {
  const value = props.karta.substr(0, props.karta.length - 1);
  const head = props.karta.substr(props.karta.length - 1, 1);
  let iconName = "cards-heart";
  let color = "red";
  if (head === "H") {
    iconName = "cards-heart";
  } else if (head === "S") {
    iconName = "cards-spade";
    color = "black";
  } else if (head === "D") {
    iconName = "cards-diamond";
  } else if (head === "C") {
    iconName = "cards-club";
    color = "black";
  }

  return (
    <View style={styles.container}>
      <View style={styles.headspot}>
        <Icon name={iconName} color={color} size={60} />
        <Icon name={iconName} color={color} size={60} />
      </View>

      <View style={styles.textspot}>
        <Text style={{ fontSize: 120, fontFamily: "Calibri" }}>{value}</Text>
      </View>

      <View style={styles.bottomspot}>
        <Icon name={iconName} color={color} size={60} />
        <Icon name={iconName} color={color} size={60} />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    height: "90%",
    width: "65%",
    borderRadius: 10,
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  headspot: {
    flexDirection: "row",
    height: "20%",
    width: "90%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  bottomspot: {
    flexDirection: "row",
    height: "20%",
    width: "90%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  textspot: {
    height: "60%",
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
