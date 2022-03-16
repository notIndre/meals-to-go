import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { View, Image } from "react-native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const Info = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.secondary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const RestaurantName = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

const SvgsRow = styled.View`
  flex-direction: row;
  justify-content: space-between
  margin-right: ${(props) => props.theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RestaurantType = styled.Image`
  width: 15px;
  height: 15px;
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[1]};
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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <RestaurantName>{name}</RestaurantName>
        <SvgsRow>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>
          <View style={{ flexDirection: "row" }}>
            {isOpenNow && !isClosedTemporarily && (
              <SvgXml xml={open} height={20} width={20} />
            )}
            <RestaurantType source={{ uri: icon }} />
          </View>
        </SvgsRow>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
