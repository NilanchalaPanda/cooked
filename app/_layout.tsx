import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    mRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    pBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    pRegular: require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <UserContext.Provider value={{  }}>
      <Stack>
        <Stack.Screen
          name="Landing"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </UserContext.Provider>
  );
}
