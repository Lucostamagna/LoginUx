import { useEffect, useState } from "react";
import userDB from "../Api/UserDb";
import { Categoria, CategoriesResponse } from "../Interfaces/AppInterface";

const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {}, []);

  const getCategories = async () => {
    const resp = await userDB.get<CategoriesResponse>("/categorias");
    setCategories(resp.data.categorias);
    setIsLoading(false);
  };

  return {
    categories,
    isLoading,
  };
};

export default useCategories;
