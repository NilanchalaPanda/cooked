import { Redirect } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "mBold",
          fontSize: 50,
        }}
      >
        Hello, I am Nilanchala Panda
      </Text>

      <Redirect href={"/Landing"} />
    </View>
  );
}
