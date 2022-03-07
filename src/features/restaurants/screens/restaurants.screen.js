import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
   {
    ${StatusBar.currentHeight} && margin-top: ${StatusBar.currentHeight}px
  }
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.accent};
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
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

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <Heading>🐁 🎀 C🍑NTENT 🎀 🐁</Heading>
        <RestaurantInfo />
      </ListContainer>
    </SafeArea>
  );
};
