import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { AppLoading } from "expo";
// import * as Font from "expo-font";
import ShopNavigator from "./navigators/ShopNavigator";
import { useFonts } from "expo-font";

// const fetchFonts = () => {
//   // return Font.loadAsync({
//   //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
//   //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
//   // });
// };

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  // const fetchFonts () => {

  // }

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
