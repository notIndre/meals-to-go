import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfo } from "../components/RestaurantInfo";
import { Spacer } from "../../../components/utils/spacer/Spacer";
import { Search } from "../components/Search";
import { SafeArea } from "../../../components/utils/safe-area/SafeArea";

const Heading = styled.Text`
  padding-vertical: ${(props) => props.theme.space[1]};
  padding-left: ${(props) => props.theme.space[1]};
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const YassifiedIndicator = styled(ActivityIndicator)`
  padding-top: ${(props) => props.theme.space[6]};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      <Heading>🐁 🎀 C🍑NTENT 🎀 🐁</Heading>
      {!isLoading ? (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail");
                }}
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfo restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <YassifiedIndicator size="large" color="indigo" />
      )}
    </SafeArea>
  );
};
