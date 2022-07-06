import React, { useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import { SettingsScreen } from "../../features/settings/screens/Settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/Favourites.screen";
import { CameraScreen } from "../../features/settings/screens/Camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name={"Settings"}
        component={SettingsScreen}
      />
      <SettingsStack.Screen name={"Favourites"} component={FavouritesScreen} />
      <SettingsStack.Screen name={"Camera"} component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
