import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./store";
import ShopNavigator from "./navigators/ShopNavigator";
import * as React from "react";

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
