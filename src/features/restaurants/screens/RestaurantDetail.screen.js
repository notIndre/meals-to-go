import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, Text } from "react-native";
import { List } from "react-native-paper";
import { RestaurantInfo } from "../components/RestaurantInfo";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Section title="MENU">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="egg-outline" />}
            onPress={handlePress}
          >
            <List.Item title="Eggs Royale" />
            <List.Item title="Vegan fry-up" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => (
              <List.Icon {...props} icon="food-drumstick-outline" />
            )}
            onPress={handlePress}
          >
            <List.Item title="Salmon bagel" />
            <List.Item title="Tofu teriyaki noodles" />
          </List.Accordion>

          <List.Accordion
            title="Desserts"
            left={(props) => <List.Icon {...props} icon="cookie" />}
            onPress={handlePress}
          >
            <List.Item title="Custard doughnut" />
            <List.Item title="Raspberry pavlova" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            onPress={handlePress}
          >
            <List.Item title="Coke Zero" />
            <List.Item title="Iced tea" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
