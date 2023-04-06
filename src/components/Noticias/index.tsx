import React, { useState, useEffect } from "react";
import axios from "axios";
import { Noticia } from "../types/noticia";
import { Props } from "../types/titulos";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

export const NoticiasPorCategoria = (props: Props) => {
  const [noticias, setNoticias] = useState<Noticia[]>([]);

  useEffect(() => {
    axios
      .get<Noticia[]>(`${process.env.NEXT_PUBLIC_HOST}/noticias`)
      .then((res) => {
        const noticiasFiltradas = res.data.filter(
          (noticia) => noticia.idCategoria === props.id
        );
        setNoticias(noticiasFiltradas);
      });
  }, [props.id]);

  return (
    <>
      <Grid container spacing={2} padding={"2rem"}>
        {noticias.map((noticia) => (
          <Grid item xs={12} sm={4} md={3} key={noticia.id}>
            <Card
              sx={{
                border: "1px solid #000",
                boxShadow: "0 0 5px #000",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardContent>
                <Typography variant="h5">Noticia: {noticia.titulo}</Typography>
                <Typography variant="body2">
                  Fecha: {noticia.fechaCreacion}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/detalle/${noticia.id}`}>
                  <Button size="small">Ir Detalle</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
