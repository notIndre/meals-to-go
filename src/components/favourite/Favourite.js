import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FaveButton = styled(TouchableOpacity)`
  position: absolute;
  top: 30px;
  right: -12px;
  width: 64px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFaves, removeFromFaves } =
    useContext(FavouritesContext);

  const isFave = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FaveButton
      onPress={() => {
        isFave ? removeFromFaves(restaurant) : addToFaves(restaurant);
      }}
    >
      <AntDesign
        name={isFave ? "heart" : "hearto"}
        size={24}
        color={isFave ? "red" : "white"}
      />
    </FaveButton>
  );
};
