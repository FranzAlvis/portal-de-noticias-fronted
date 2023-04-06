import Footer from "@/components/Footer";
import Titulo from "@/components/Titulo";
import { Noticia } from "@/components/types/noticia";
import { Card, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detalle = () => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get<Noticia[]>(`${process.env.NEXT_PUBLIC_HOST}/noticias`)
      .then((res) => {
        const noticiasEspecificas = res.data.filter(
          (noticia) =>
            parseInt(noticia.id) ===
            parseInt(Array.isArray(id) ? id[0] : id || "0")
        );
        setNoticias(noticiasEspecificas);
      });
  }, [id]);

  return (
    <>
      <Titulo></Titulo>
      {noticias.map((noticia) => (
        <Card
          key={noticia.id}
          sx={{
            width: "70%",
            margin: "2rem auto",
            padding: "2rem",
            textAlign: "center",
            border: "1px solid #000",
            boxShadow: "0 0 5px #000",
          }}
        >
          <CardContent>
            <Typography variant="h6" textAlign={"left"} color={"red"}>
              {`${noticia.categoria.nombre } / ${noticia.departamento.nombre}`}
            </Typography>
            <Typography variant="h3" color={"#3a6b6e"}>
              {noticia.titulo}
            </Typography>
            <Typography variant="body2" textAlign={"right"}>
              {noticia.fechaCreacion}
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              {noticia.autor}
            </Typography>
            <Typography variant="h5" textAlign={"left"}>
              {noticia.descripcion}
            </Typography>
            <Typography variant="body2">
              {noticia.imagen}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <Footer></Footer>
    </>
  );
};

export default Detalle;
