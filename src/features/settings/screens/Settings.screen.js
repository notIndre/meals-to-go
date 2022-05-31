import React from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../../components/typography/Text";
import { SafeArea } from "../../../components/utils/safe-area/SafeArea";

export const SettingsScreen = () => {
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Best Sims mod"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="food" />}
          onPress={() =>
            navigation.navigate("https://www.youtube.com/watch?v=kG2EQEsGFCc")
          }
        />
      </List.Section>
    </SafeArea>
  );
};
