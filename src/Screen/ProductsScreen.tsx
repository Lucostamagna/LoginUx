import React, { useContext } from "react";
import { View, Text, FlatList,StyleSheet, TouchableOpacity } from "react-native";

import { ProductContext } from "../Context/ProductContext";

const ProductsScreen = () => {
  const { product } = useContext(ProductContext);
  return (
    <View style={{ flex: 1, marginHorizontal: 10 }}>
      <FlatList
        data={product}
        keyExtractor={(p) => p._id}
        renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.6}>
        <Text style={styles.productName}> {item.nombre}</Text>
       
        </TouchableOpacity>
  )}
  ItemSeparatorComponent={()=>(
    <View style={styles.itemSeparator}/>

   
  )

  }
      />
    </View>
  );
};

export default ProductsScreen;
const styles = StyleSheet.create({
 productName:{
  fontSize:15,
  fontWeight:'bold'
 },
 itemSeparator:{
  borderBottomWidth:3,
  backgroundColor:'#50e3c2',
  marginVertical:6,
  borderBottomColor:'rgba(0,0,0,0.1)'
 }
})