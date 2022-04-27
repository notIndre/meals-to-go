import "react-native-gesture-handler";
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
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { Navigation } from "./src/infrastructure/navigation";

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
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar />
      </>
    );
  }
}
