import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { Text } from "../../../components/typography/Text";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utils/safe-area/SafeArea";
import { Spacer } from "../../../components/utils/spacer/Spacer";
import { RestaurantInfo } from "../../restaurants/components/RestaurantInfo";
import { RestaurantList } from "../../restaurants/screens/Restaurants.screen";

const NoFavouritesYet = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
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
    </SafeArea>
  ) : (
    <NoFavouritesYet>
      <Text variant="title">Add some favourites to see them here!</Text>
    </NoFavouritesYet>
  );
};
