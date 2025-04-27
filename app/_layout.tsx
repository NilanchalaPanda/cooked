import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    mRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    pBold: require("@/assets/fonts/Poppins-Bold.ttf"),
    pRegular: require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  return (
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
  );
}
