import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.accent};
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
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