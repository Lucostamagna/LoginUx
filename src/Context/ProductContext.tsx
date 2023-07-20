import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../Interfaces/AppInterface";
import userDB from "../Api/UserDb";

type ProductContextProps = {
  product: Producto[];
  loadProduct: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<void>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>;
};

export const ProductContext = createContext({} as ProductContextProps);

export const ProductProvider = ({ children }: any) => {
  const [product, setProduct] = useState<Producto[]>([]);

useEffect(()=>{
loadProduct();
},[])


//carga ´productos
  const loadProduct = async () => {
const resp= await userDB.get<ProductsResponse>('/productos?limite=50');
// setProduct([...product, ...resp.data.productos])
setProduct([...resp.data.productos])
console.log(resp.data.productos)
  };


  const addProduct = async (categoryId: string, productName: string) => {};
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string
  ) => {};
  const deleteProduct = async (id: string) => {};
  const loadProductById = async (id: string) => {
    throw new Error("not implemented");
  };
  const uploadImage = async (data: any, id: string) => {};

  return (
    <ProductContext.Provider
      value={{
        product,
        loadProduct,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
