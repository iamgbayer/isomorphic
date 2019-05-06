import React from "react";
import { Button as Buttonable } from "react-native";

export function Button({ title, onPress }) {
  return <Buttonable onPress={onPress} title={title} />;
}
