import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.accent};
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavesToggled, onFavesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavesToggle}
        placeholder="search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
