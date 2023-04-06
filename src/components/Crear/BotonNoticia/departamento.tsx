import axios from "axios";

export const obtenerDepartamentos = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_HOST}/departamentos`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
