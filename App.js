import React from "react";
import { View, Text } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useBallet,
  Ballet_400Regular,
} from "@expo-google-fonts/ballet";
import {
  useFonts as useGothic,
  DotGothic16_400Regular,
} from "@expo-google-fonts/dotgothic16";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/Restaurants.screen";

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Map!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Restaurants") {
                    iconName = focused ? "fast-food" : "fast-food-outline";
                  } else if (route.name === "Map") {
                    iconName = focused ? "md-location" : "md-location-outline";
                  } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "settings-outline";
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: `${theme.colors.ui.success}`,
                tabBarInactiveTintColor: `${theme.colors.ui.secondary}`,
              })}
            >
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ThemeProvider>
        <ExpoStatusBar />
      </>
    );
  }
}
