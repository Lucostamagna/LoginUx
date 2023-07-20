import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { View,Text } from "react-native";
import { ProductStackParams } from "../Navigator/ProductNavigator";


interface Props extends StackScreenProps<ProductStackParams, "ProductScreen"> {}

const ProductScreen = ({ navigation, route }: Props) => {
  const { id, name = "" } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: name ? name : "New Product",
    });
  }, []);

  return (
    <View>
      <Text>
        {" "}
        {id} {name}
      </Text>
    </View>
  );
};

export default ProductScreen;
