import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Info = styled.View`
  margin: ${(props) => props.theme.space[3]};
`;

export const SvgsRow = styled.View`
  flex-direction: row;
  justify-content: space-between
  margin-right: ${(props) => props.theme.space[2]};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantType = styled.Image`
  width: 15px;
  height: 15px;
  margin-left: ${(props) => props.theme.space[1]};
`;
