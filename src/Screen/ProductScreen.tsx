import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
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
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}> Product's name: </Text>
        <TextInput placeholder="Product" style={styles.textInput} />

        <Text style={styles.label}> Categories: </Text>
        <Button title="Guardar" onPress={() => {}} />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Button title="Camera" onPress={() => {}} />
<View style={{width:10}}/>
          <Button title="Galery" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: "rgba(0,0,0,0.2)",
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
