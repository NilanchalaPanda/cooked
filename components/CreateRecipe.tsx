import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Colors from "@/services/Colors";
import Button from "./Button";

export default function CreateRecipe() {
  const [input, setInput] = useState<string>("");

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/pan.gif")}
        style={styles.gifStyle}
      />
      <Text style={styles.heading}>Warm up your stook & start cooking!</Text>
      <Text style={styles.subHeading}>Make something for you LOVE</Text>

      <TextInput
        style={styles.inputStyle}
        multiline={true}
        numberOfLines={3}
        placeholder="What are we cooking today?"
        onChangeText={(value) => setInput(value)}
      />

      <Button label={"Generate Recipe"} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 12,
    paddingBottom: 14,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
  },
  gifStyle: {
    width: 80,
    height: 80,
  },
  heading: {
    fontFamily: "mBold",
    fontSize: 20,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "pRegular",
    fontSize: 14,
    textAlign: "center",
  },
  inputStyle: {
    fontFamily: "mRegular",
    backgroundColor: Colors.WHITE,
    marginTop: 4,
    width: "100%",
    height: 120,
    borderRadius: 14,
    padding: 10,
    textAlignVertical: "top",
  },
});
