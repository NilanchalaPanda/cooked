import { UserContext } from "@/context/UserContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";

export default function Index() {
  const { user, setUser } = useContext(UserContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Redirect href={"/Landing"} />
    </View>
  );
}
