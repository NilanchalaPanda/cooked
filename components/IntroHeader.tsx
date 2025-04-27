import { View, Text, Switch, Image, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function IntroHeader() {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require("@/assets/images/i4.png")}
          style={styles.profileStyle}
        />
        <Text style={styles.textStyle}>Hello, Nilanchal</Text>
      </View>
      <View style={styles.preferenceContainer}>
        <Text style={styles.preferenceTextStyle}>
          {!isEnable ? "Non-Veg" : "Veg"}
        </Text>
        <Switch value={isEnable} onValueChange={() => setIsEnable(!isEnable)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  profileStyle: {
    width: 24,
    height: 24,
    borderRadius: 99,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "mBold",
  },
  preferenceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  preferenceTextStyle: {
    fontSize: 12,
    fontFamily: "pBold",
  },
});
