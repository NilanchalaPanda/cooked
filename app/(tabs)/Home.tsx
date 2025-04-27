import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "@/services/Colors";
import IntroHeader from "@/components/IntroHeader";
import CreateRecipe from "@/components/CreateRecipe";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Intro */}
      <IntroHeader />

      {/* Recipe Generator */}
      <CreateRecipe />

      {/* Categories */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: Colors.WHITE,
  },
});
