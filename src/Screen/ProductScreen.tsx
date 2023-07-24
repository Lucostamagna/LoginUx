import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductStackParams } from "../Navigator/ProductNavigator";
import useCategories from "../Hooks/useCategories";


interface Props extends StackScreenProps<ProductStackParams, "ProductScreen"> {}

const ProductScreen = ({ navigation, route }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { id, name = "" } = route.params;
  const {categories }=useCategories();

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

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          {categories.map(c => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
          ))}
        </Picker>

        <TouchableOpacity
          style={styles.buttonGuardar}
          activeOpacity={0.6}
          onPress={() => {}}
        >
          <Text style={styles.textGuardar}> Guardar </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={styles.buttonCamera}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <Text style={styles.textGuardar}> Camera </Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity
            style={styles.buttonCamera}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <Text style={styles.textGuardar}> Galery</Text>
          </TouchableOpacity>
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
    fontSize: 17,
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: "#50e3c2",
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonGuardar: {
    backgroundColor: "#50e3c2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },
  textGuardar: {
    fontWeight: "600",
    fontSize: 15,
  },
  buttonCamera: {
    width: "45%",
    backgroundColor: "#50e3c2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
});
