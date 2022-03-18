import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/RestaurantInfo";
import { Spacer } from "../../../components/utils/spacer/Spacer";
import { SafeArea } from "../../../components/utils/safe-area/SafeArea";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.accent};
  padding: ${(props) => props.theme.space[3]};
`;

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

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <Heading>🐁 🎀 C🍑NTENT 🎀 🐁</Heading>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfo />
            </Spacer>
          </>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
