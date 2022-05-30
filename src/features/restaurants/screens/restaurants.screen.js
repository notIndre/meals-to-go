import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  FavouritesContext,
  FavouritesContextProvider,
} from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourite/FavouritesBar";
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
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <Search
        isFavesToggled={isToggled}
        onFavesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          showDetail={navigation.navigate}
        />
      )}
      <Heading>🐁 🎀 C🍑NTENT 🎀 🐁</Heading>
      {!isLoading ? (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantDetail", { restaurant: item });
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
