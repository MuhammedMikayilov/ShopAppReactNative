import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Empty = () => {
  return (
    <View style={styles.container}>
      <Text>Empty</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
