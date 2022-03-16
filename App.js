import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useBallet,
  Ballet_400Regular,
} from "@expo-google-fonts/ballet";
import {
  useFonts as useGothic,
  DotGothic16_400Regular,
} from "@expo-google-fonts/dotgothic16";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  const [balletLoaded] = useBallet({
    Ballet_400Regular,
  });

  const [gothicLoaded] = useGothic({
    DotGothic16_400Regular,
  });

  if (!balletLoaded || !gothicLoaded) {
    return null;
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
