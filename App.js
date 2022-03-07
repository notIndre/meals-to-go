import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { useFonts, Ballet_400Regular } from "@expo-google-fonts/ballet";
import { DotGothic16_400Regular } from "@expo-google-fonts/dotgothic16";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ballet_400Regular,
    DotGothic16_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
        </ThemeProvider>
        <ExpoStatusBar />
      </>
    );
  }
}
