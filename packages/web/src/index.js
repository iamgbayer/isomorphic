import React from "react";
import ReactDOM from "react-dom";
import DayPicker from "react-day-picker";
import { View, Text } from "react-native";

import { Button } from "@isomorphic/components";

import "react-day-picker/lib/style.css";

function App() {
  return (
    <View>
      <DayPicker />
      <Text>Web</Text>
      <Button onPress={() => alert("Bar")} title="Bar" />
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
