import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View
      className="flex-1 justify-center items-center"
      style={styles.container}
    >
      <Text className="text-5xl font-bold text-dark-200">Welcome!</Text>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
