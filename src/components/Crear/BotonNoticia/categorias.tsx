import axios from "axios";

export const obtenerCategorias = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/categorias`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
