import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { StackScreenProps } from "@react-navigation/stack";
import { ProductStackParams } from "../Navigator/ProductNavigator";
import useCategories from "../Hooks/useCategories";
import { useForm } from "../Hooks/useForm";
import { ProductContext } from "../Context/ProductContext";

interface Props extends StackScreenProps<ProductStackParams, "ProductScreen"> {}

const ProductScreen = ({ navigation, route }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { id = "", name = "" } = route.params;

  const { categories } = useCategories();

  const { loadProductById, addProduct, updateProduct } = useContext(ProductContext);

  const { _id, categoriaId, nombre, img, form, onChange, setFormValue } =
    useForm({
      _id: id,
      categoriaId: "",
      nombre: name,
      img: "",
    });

  useEffect(() => {
    navigation.setOptions({
      title:(nombre) ? nombre: "Name's  Product",
    });
  }, [ nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (id.length === 0) return;
    const product = await loadProductById(id);
    console.log("llllllllllll", product);
    setFormValue({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || "",
      nombre,
    });
  };

  const saveOrUpDate = async () => {
    if (id.length > 0) {
      updateProduct(categoriaId,nombre,id)
    } else {
      const tempCategoriaId = categoriaId || categories[0]._id
       const newProduct=await addProduct(tempCategoriaId, nombre)
    onChange(newProduct._id, '_id')
      }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}> Product's name: </Text>
        <TextInput
          placeholder="Product"
          style={styles.textInput}
          value={nombre}
          onChangeText={(value) => onChange(value, "nombre")}
        />

        <Text style={styles.label}> Categories: </Text>

        <Picker
          selectedValue={categoriaId}
          onValueChange={(value) => onChange(value, "categoriaId")}
        >
          {categories.map((c) => (
            <Picker.Item label={c.nombre} value={c._id} key={c._id} />
          ))}
        </Picker>

        <TouchableOpacity
          style={styles.buttonGuardar}
          activeOpacity={0.6}
          onPress={saveOrUpDate}
        >
          <Text style={styles.textGuardar}> Guardar </Text>
        </TouchableOpacity>
        {
        
        (_id.length > 0) && (
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
        )}

        {img.length > 0 && (
          <Image source={{ uri: img }} style={{ width:100, height: 300 }} />
        )}
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
