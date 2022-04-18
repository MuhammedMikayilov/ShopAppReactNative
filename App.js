import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ShopNavigator from "./navigators/ShopNavigator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
