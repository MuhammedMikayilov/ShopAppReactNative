import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";
import Empty from "../../components/UI/Empty";

const OrdersScreen = (props) => {
  const { orders } = useSelector((state) => state.orders);

  return (
    <>
      {orders.length ? (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <OrderItem
              amount={itemData.item.totalAmount}
              date={itemData.item.readableDate}
              items={itemData.item.items}
            />
          )}
        />
      ) : (
        <Empty />
      )}
    </>
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Orders",
  };
};

export default OrdersScreen;
