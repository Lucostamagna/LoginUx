import React, { createContext, useState } from "react";
import { Producto } from "../Interfaces/AppInterface";

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

  const loadProduct = async () => {};
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
