import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

import ProductsOverViewScreen from "../screens/shop/ProductsOverViewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductNavigator = createStackNavigator(
  {
    ProductOverView: ProductsOverViewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

export default createAppContainer(ProductNavigator);
