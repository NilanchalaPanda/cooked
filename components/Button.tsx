import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/services/Colors";

export default function Button({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
      <Text style={styles.btnTextStyle}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    width: "100%",
    backgroundColor: Colors.PRIMARY,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  btnTextStyle: {
    fontFamily: "pBold",
    fontSize: 16,
    color: Colors.WHITE,
  },
});
