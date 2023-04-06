import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Categoria, categoriaProps } from "../types/categoria";
import { NoticiasPorCategoria } from "../Noticias";

export const Nav = ({}: categoriaProps) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<
    number | null
  >(null);

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_HOST}/categorias`
      );
      setCategorias(data);
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener las categorias");
    }
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  const ClickCategoria = (id: number) => {
    setCategoriaSeleccionada(id);
  };

  return (
    <>
      <Grid container spacing={2} justifyContent={"center"} marginTop={"1rem"}>
        {categorias.map((categoria: Categoria, index: number) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
            <Paper
              elevation={12}
              sx={{ p: 2, textAlign: "center", cursor: "pointer" }}
              onClick={() => ClickCategoria(categoria.id)}
            >
              <Typography variant="h6">{categoria.nombre}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {categoriaSeleccionada && (
        <NoticiasPorCategoria
          id={categoriaSeleccionada.toString()}
        ></NoticiasPorCategoria>
      )}
    </>
  );
};

// import { Grid, Paper, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Categoria, categoriaProps } from "../types/categoria";
// import { NoticiasPorCategoria } from "../Noticias";

// export const Nav = ({}: categoriaProps) => {
//   const [categorias, setCategorias] = useState<Categoria[]>([]);

//   const obtenerCategorias = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.NEXT_PUBLIC_HOST}/categorias`
//       );
//       setCategorias(data);
//     } catch (error) {
//       console.log(error);
//       throw new Error("Error al obtener las categorias");
//     }
//   };

//   useEffect(() => {
//     obtenerCategorias();
//   }, []);

//   return (
//     <>
//       <Grid container spacing={2} justifyContent={"center"} marginTop={"1rem"}>
//         {categorias.map((categoria: Categoria, index: number) => (
//           <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
//             <Paper elevation={12} sx={{ p: 2, textAlign: "center" }}>
//               <Typography variant="h6">{categoria.nombre}</Typography>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//       <NoticiasPorCategoria id={"1"}></NoticiasPorCategoria>
//     </>
//   );
// };
