import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProductContext } from "../Context/ProductContext";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductStackParams } from "../Navigator/ProductNavigator";

interface Props extends StackScreenProps<ProductStackParams, "ProductScreen"> {}

const ProductsScreen = ({ navigation }: Props) => {
  const { product, loadProduct } = useContext(ProductContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ marginRight: 30 }}
          onPress={() => navigation.navigate("ProductScreen", {})}
        >
          <Text> Add </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={product}
        keyExtractor={(p) => p._id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={styles.productName}> {item.nombre}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() =>
                navigation.navigate("ProductScreen", {
                  id: item._id,
                  name: item.nombre,
                })
              }
            >
              <Ionicons
                name="arrow-forward-outline"
                size={25}
                color="#76D7C4"
              />
            </TouchableOpacity>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
  productName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  itemSeparator: {
    borderBottomWidth: 3,
    backgroundColor: "#50e3c2",
    marginVertical: 6,
    borderBottomColor: "rgba(0,0,0,0.1)",
  },
});
