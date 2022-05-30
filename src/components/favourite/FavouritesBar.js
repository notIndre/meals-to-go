import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/CompactRestaurantInfo";
import { Spacer } from "../utils/spacer/Spacer";
import { Text } from "../typography/Text";

const FavesWrapper = styled.View`
  padding: 10px;
`;

const FavesTitle = styled(Text)`
  align-self: center;
`;

export const FavouritesBar = ({ favourites, showDetail }) => {
  if (favourites.length > 0) {
    return (
      <FavesWrapper>
        <FavesTitle variant="hint">💖 Faves 💖</FavesTitle>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <Spacer key={key} position="left" size="large">
                <TouchableOpacity
                  onPress={() =>
                    showDetail("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FavesWrapper>
    );
  }
  return null;
};
