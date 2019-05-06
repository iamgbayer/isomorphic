import React from "react";
import { View, Text } from "react-native";

import { Button } from "@isomorphic/components";

export default function App() {
  return (
    <View>
      <Button onPress={() => alert("Bar")} title="Bar" />
      <Text>sa</Text>
    </View>
  );
}
