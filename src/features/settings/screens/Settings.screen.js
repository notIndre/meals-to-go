import React from "react";
import { Avatar, List } from "react-native-paper";
import { Text } from "../../../components/typography/Text";
import { Spacer } from "../../../components/utils/spacer/Spacer";
import { SafeArea } from "../../../components/utils/safe-area/SafeArea";
import styled from "styled-components/native";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const UserContainer = styled.View`
  align-items: center;
  padding-top: ${(props) => props.theme.space[3]};
`;

export const SettingsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <UserContainer>
        <Avatar.Icon size={100} icon="pirate" backgroundColor="#c91a2f" />
        <Spacer position="top" size="large">
          <Text variant="title">hello, indre</Text>
        </Spacer>
      </UserContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
      </List.Section>
    </SafeArea>
  );
};
