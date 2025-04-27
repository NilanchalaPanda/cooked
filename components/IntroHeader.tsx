import { View, Text, Switch } from "react-native";
import React, { useState } from "react";

export default function IntroHeader() {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  return (
    <View>
      <View></View>
      <View>
        <Text>{!isEnable ? "Non-Veg" : "Veg"}</Text>
        <Switch value={isEnable} onValueChange={() => setIsEnable(!isEnable)} />
      </View>
    </View>
  );
}
