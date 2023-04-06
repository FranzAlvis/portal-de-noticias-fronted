import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Categoria } from "../../types/categoria";

const ListaCategoria = () => {
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
        {/* <Button variant="contained" sx={{margin: "1.5rem 0 0.8rem 2rem", fontSize: "1.2rem"}}>Crear Categoria</Button> */}
        <Grid container spacing={2} padding={"2rem"}>
          {categoria.map((categoria) => (
            <Grid item xs={12} sm={4} md={3} key={categoria.id}>
              <Card
                sx={{
                  textAlign: "center",
                  border: "1px solid #000",
                  boxShadow: "0 0 5px #000",
                }}
              >
                <CardContent>
                  <Typography variant="h5">
                    Categoria: {categoria.nombre}
                  </Typography>
                  <Typography variant="body2">
                    Abreviatura: {categoria.abreviatura}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };
  
  export default ListaCategoria;