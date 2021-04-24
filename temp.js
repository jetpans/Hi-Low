import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Header from "./Components/Header";
import OptionButton from "./Components/OptionButton";

const colors = ["H", "S", "D", "C"];
let nums = [];
let cards = [];
let used = [];
for (let i = 2; i < 11; i++) {
  nums.push(String(i));
}
nums.push("J", "Q", "K", "A");

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 13; j++) {
    cards.push(nums[j] + colors[i]);
  }
}
let now = Math.floor(Math.random() * 52);
used.push(cards[now]);

export default function App() {
  const [currentcard, setCurrentCard] = useState(cards[now]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const newCard = () => {
    let rng = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[rng]);
    used.push(cards[rng]);
  };

  const hitLow = () => {
    newCard();
    let stara = used[used.length - 2];
    let nova = used[used.length - 1];
    let oldIndex = nums.indexOf(stara.substr(0, stara.length - 1));
    let newIndex = nums.indexOf(nova.substr(0, nova.length - 1));
    if (newIndex < oldIndex) {
      setScore(score + 1);
    } else {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
    }
  };

  const hitEqual = () => {
    newCard();
    let stara = used[used.length - 2];
    let nova = used[used.length - 1];
    let oldIndex = nums.indexOf(stara.substr(0, stara.length - 1));
    let newIndex = nums.indexOf(nova.substr(0, nova.length - 1));
    if (newIndex == oldIndex) {
      setScore(score + 1);
    } else {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
    }
  };

  const hitHigh = () => {
    newCard();
    let stara = used[used.length - 2];
    let nova = used[used.length - 1];
    let oldIndex = nums.indexOf(stara.substr(0, stara.length - 1));
    let newIndex = nums.indexOf(nova.substr(0, nova.length - 1));
    if (newIndex > oldIndex) {
      setScore(score + 1);
    } else {
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
    }
  };

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.cardspot}>
        <Image
          style={styles.picture}
          source={require("./assets/" + currentcard + ".png")}
        ></Image>
      </View>

      <View style={styles.optionspot}>
        <OptionButton
          style={styles.optionHigh}
          onPress={() => {
            hitHigh();
          }}
          text="HIGH"
        />

        <OptionButton
          style={styles.optionEqual}
          onPress={() => {
            hitEqual();
          }}
          text="EQUAL"
        />

        <OptionButton
          style={styles.optionLow}
          onPress={() => {
            hitLow();
          }}
          text="LOW"
        />
      </View>

      <View style={styles.scoresspot}>
        <Text
          style={{ fontSize: 70, fontFamily: "Calibri", fontWeight: "bold" }}
        >
          SCORE: {score}
        </Text>

        <Text
          style={{ fontSize: 30, fontFamily: "Calibri", fontWeight: "bold" }}
        >
          HIGHSCORE: {highscore}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardspot: {
    width: "100%",
    height: "50%",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  optionspot: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "space-between",
    alignContent: "center",
  },
  scoresspot: {
    width: "100%",
    height: "20%",
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  optionHigh: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    backgroundColor: "#ed5628",
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  optionLow: {
    backgroundColor: "#23b872",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  optionEqual: {
    backgroundColor: "#e6eb54",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    height: 105.6 * 3.95,
    width: 69.1 * 3.95,
  },
});
