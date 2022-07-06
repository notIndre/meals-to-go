import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Avatar, List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const [photo, setPhoto] = useState(null);
  const getProfilePicture = async () => {
    const photoSrc = await AsyncStorage.getItem("user-photo");
    setPhoto(photoSrc);
  };

  useFocusEffect(() => {
    getProfilePicture();
  }, [photo, getProfilePicture]);

  return (
    <SafeArea>
      <UserContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={100} icon="pirate" backgroundColor="#c91a2f" />
          ) : (
            <Avatar.Image size={100} source={{ uri: photo }} />
          )}
        </TouchableOpacity>
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
