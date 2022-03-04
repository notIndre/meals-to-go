import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>🥰 content 🥰</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#f5c4ed",
  },
  search: {
    backgroundColor: "#e66ed4",
    padding: 16,
  },
  content: {
    backgroundColor: "#f5c4ed",
    flex: 1,
    padding: 16,
  },
  text: { paddingVertical: 5, paddingLeft: 5 },
});
