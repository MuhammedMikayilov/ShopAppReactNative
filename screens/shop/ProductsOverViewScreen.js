import * as React from "react";
import { FlatList, Platform, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";

const ProductsOverViewScreen = (props) => {
  const { data: products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isShowedToast, setShowedToast] = React.useState(false);

  React.useEffect(() => {
    setShowedToast(false);
  }, []);

  return (
    <>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
            onViewDetail={() => {
              props.navigation.navigate("ProductDetail", {
                productId: item.id,
                productTitle: item.title,
              });
            }}
            onAddToCart={() => {
              setShowedToast(true);
              dispatch(cartActions.addToCart(item));
            }}
          />
        )}
      />
    </>
  );
};

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Products",
  };
};

export default ProductsOverViewScreen;
