import React from "react";
import styled from "styled-components/native";
import { Card, Title } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantName = styled(Title)`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://cdn-0.emojis.wiki/emoji-pics/facebook/fairy-facebook.png",
    photos = [
      "https://media.glamourmagazine.co.uk/photos/61a4f2b2362a2a0e32e79856/16:9/w_2560%2Cc_limit/YASSIFY_291121_yass_L.jpg",
    ],
    address = "⋆  🎀  address 🍩f restaurant  🎀  ⋆",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Card.Content>
        <RestaurantName>{name}</RestaurantName>
      </Card.Content>
    </RestaurantCard>
  );
};
