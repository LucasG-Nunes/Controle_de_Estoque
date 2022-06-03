import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    const response = await axios.get("http://localhost:3333/produtos");
    setProdutos(response.data);
    console.log(produtos);
  }

  useEffect(() => {
    getProdutos();
  }, []);
  return { produtos };
};
export default useAxios;
