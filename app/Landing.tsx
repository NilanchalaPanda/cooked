import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/services/Colors";
import { router } from "expo-router";
import Button from "@/components/Button";

export default function Landing() {
  const imageList = [
    require("@/assets/images/1.jpg"),
    require("@/assets/images/2.jpg"),
    require("@/assets/images/3.jpg"),
    require("@/assets/images/4.jpg"),
    require("@/assets/images/5.jpg"),
    require("@/assets/images/6.jpg"),
    require("@/assets/images/c1.jpg"),
    require("@/assets/images/c3.jpg"),
  ];

  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.6}
          style={{
            transform: [{ rotate: "-4deg" }],
          }}
        >
          <View style={styles.container}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee
          spacing={10}
          speed={0.5}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 12,
          }}
        >
          <View style={styles.container}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <Marquee
          spacing={10}
          speed={0.7}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 12,
          }}
        >
          <View style={styles.container}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
      </View>

      <View
        style={{
          backgroundColor: Colors.WHITE,
          height: "100%",
          padding: 18,
        }}
      >
        <Text style={styles.headingTextStyle}>
          Cooked | Find, Create and Enjoy Delicious Meals with your family!
        </Text>

        <Text style={styles.subTextStyle}>
          Generate any recipies in seconds and revisit any time again.
        </Text>

        <Button
          label={"Get Started"}
          onPress={() => router.replace("/(tabs)/Home")}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  headingTextStyle: {
    fontFamily: "pBold",
    fontSize: 22,
    textAlign: "center",
  },
  subTextStyle: {
    textAlign: "center",
    paddingHorizontal: 12,
    fontFamily: "pBold",
    fontSize: 16,
    color: Colors.GRAY,
  },
});
