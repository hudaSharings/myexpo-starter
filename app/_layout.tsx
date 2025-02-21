import "../global.css";

import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useStore } from "../store/useStore";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-reanimated";
//SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  /* const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
*/

  return (
    <SafeAreaProvider>
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index"  />
        <Stack.Screen name="(auth)/login" options={{ headerShown: true, title: "", headerBackButtonDisplayMode:"minimal" }} />
        <Stack.Screen name="(auth)/register"options={{headerShown: true,title: "Register", headerBackButtonDisplayMode:"minimal" }} />
        </Stack>
      
    </QueryClientProvider>
    </SafeAreaProvider>
  );
}
