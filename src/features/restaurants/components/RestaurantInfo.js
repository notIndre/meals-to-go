import React from "react";
import { SvgXml } from "react-native-svg";
import { View } from "react-native";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  SvgsRow,
  Rating,
  RestaurantType,
} from "./RestaurantInfo.styles";
import { Text } from "../../../components/typography/Text";
import { Favourite } from "../../../components/favourite/Favourite";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5} key={name}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <SvgsRow>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                height={20}
                width={20}
              />
            ))}
          </Rating>
          <View style={{ flexDirection: "row" }}>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            {isOpenNow && !isClosedTemporarily && (
              <SvgXml xml={open} height={20} width={20} />
            )}
            <RestaurantType source={{ uri: icon }} />
          </View>
        </SvgsRow>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
