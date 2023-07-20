import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ProductsScreen from "../Screen/ProductsScreen";

export type ProductNavigatorProps = {
  ProductsScreen: undefined;
  ProducScreen: { id?: string; name?: string };
};

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={ProductsScreen}
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen name="ProducstScreen" component={ProductsScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
