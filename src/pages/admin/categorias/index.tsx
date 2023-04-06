import ListaCategoria from "@/components/Listar/ListarCategoria";
import { CrearCategoria } from "@/components/Crear/BotonCategoria";
import Footer from "@/components/Footer";
import TituloAdmin from "@/components/TituloAdmin";
import { Categoria } from "@/components/types/categoria";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const AdminCategorias: NextPage = () => {
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  useEffect(() => {
    axios
      .get<Categoria[]>(`${process.env.NEXT_PUBLIC_HOST}/categorias`)
      .then((res) => {
        setCategoria(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <TituloAdmin></TituloAdmin>
      <CrearCategoria></CrearCategoria>
      <ListaCategoria></ListaCategoria>
      <Footer></Footer>
    </>
  );
};

export default AdminCategorias;

