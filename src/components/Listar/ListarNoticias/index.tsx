import { Noticia } from "@/components/types/noticia";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ListarNoticias = () => {
  const [noticia, setNoticia] = useState<Noticia[]>([]);

  useEffect(() => {
    axios
      .get<Noticia[]>(`${process.env.NEXT_PUBLIC_HOST}/noticias`)
      .then((res) => {
        setNoticia(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <Grid container spacing={2} padding={"2rem"}>
        {noticia.map((noticia) => (
          <Grid item xs={12} sm={4} md={3} key={noticia.id}>
            <Card
              sx={{
                textAlign: "center",
                border: "1px solid #000",
                boxShadow: "0 0 5px #000",
              }}
            >
              <CardContent>
                <Typography variant="h5">Titulo: {noticia.titulo}</Typography>
                <Typography variant="body2">Autor: {noticia.autor}</Typography>
                <Typography variant="body2">
                  Fecha: {noticia.fechaCreacion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListarNoticias;
