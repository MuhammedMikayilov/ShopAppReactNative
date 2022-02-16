import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import ProductsOverviewScreen, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductsOverViewScreen";
import ProductDetailScreen, {
  screenOptions as productDetailScreenOptions,
} from "../screens/shop/ProductDetailScreen";
import CartScreen, {
  screenOptions as cartScreenOptions,
} from "../screens/shop/CartScreen";
import OrdersScreen, {
  screenOptions as ordersScreenOptions,
} from "../screens/shop/OrdersScreen";
import { Colors } from "../constants/Colors";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerShown: false,
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={productsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={productDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={ordersScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};
const ShopDrawerNavigator = createDrawerNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <ShopDrawerNavigator.Navigator
        drawerContent={(props) => {
          return (
            <View style={{ flex: 1, paddingTop: 20 }}>
              <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
                <DrawerItemList {...props} />
                <Button title="Logout" color={Colors.primary} />
              </SafeAreaView>
            </View>
          );
        }}
        screenOptions={{
          activeTintColor: Colors.primary,
        }}
      >
        <ShopDrawerNavigator.Screen
          name="Products"
          component={ProductsNavigator}
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-home" : "ios-home"}
                size={23}
                color={props.color}
              />
            ),
          }}
        />
        <ShopDrawerNavigator.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-list" : "ios-list"}
                size={23}
                color={props.color}
              />
            ),
          }}
        />
        <ShopDrawerNavigator.Screen
          name="Cart"
          component={CartScreen}
          options={cartScreenOptions}
          // component={OrdersNavigator}
          options={{
            drawerIcon: (props) => (
              <Ionicons
                name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
                size={23}
                color={props.color}
              />
            ),
          }}
        />
      </ShopDrawerNavigator.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;
