import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
   {
    ${StatusBar.currentHeight} && margin-top: ${StatusBar.currentHeight}px
  }
`;
