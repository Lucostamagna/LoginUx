import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductsScreen from "../Screen/ProductsScreen";
import ProductScreen from "../Screen/ProductScreen";

export type ProductStackParams = {
  ProductsScreen: undefined;
  ProductScreen: { id?: string; name?: string };
};

const Stack = createStackNavigator<ProductStackParams>();

const ProductNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
