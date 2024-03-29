import React, { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../Interfaces/AppInterface";
import userDB from "../Api/UserDb";

type ProductContextProps = {
  product: Producto[];
  loadProduct: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
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

  useEffect(() => {
    loadProduct();
  }, []);

  //carga ´productos
  const loadProduct = async () => {
    const resp = await userDB.get<ProductsResponse>("/productos?limite=50");
    // setProduct([...product, ...resp.data.productos])
    setProduct([...resp.data.productos]);
    console.log(resp.data.productos);
  };

  const addProduct = async (
    categoryId: string,
    productName: string
  ): Promise<Producto> => {
    const resp = await userDB.post<Producto>("/productos", {
      nombre: productName,
      categoria: categoryId,
    });
    setProduct([...product, resp.data]);
    return resp.data;
  };

  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string
  ) => {
    const resp = await userDB.put<Producto>(`/productos/${productId}`, {
      nombre: productName,
      categoria: categoryId,
    });
    setProduct(
      product.map((prod) => {
        return prod._id === productId ? resp.data : prod;
      })
    );
  };

  const deleteProduct = async (id: string) => {};

  const loadProductById = async (id: string): Promise<Producto> => {
    const resp = await userDB.get<Producto>(`/productos/${id}`);

    return resp.data;
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
