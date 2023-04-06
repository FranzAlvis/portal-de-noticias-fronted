import { Departamento } from "@/components/types/departamento";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ListaDepartamento = () => {
  const [departamento, setDepartamento] = useState<Departamento[]>([]);

  useEffect(() => {
    axios
      .get<Departamento[]>(`${process.env.NEXT_PUBLIC_HOST}/departamentos`)
      .then((res) => {
        setDepartamento(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      
      <Grid container spacing={2} padding={"2rem"}>
        {departamento.map((departamento) => (
          <Grid item xs={12} sm={4} md={3} key={departamento.id}>
            <Card
              sx={{
                textAlign: "center",
                border: "1px solid #000",
                boxShadow: "0 0 5px #000",
              }}
            >
              <CardContent>
                <Typography variant="h5">
                  Departamento: {departamento.nombre}
                </Typography>
                <Typography variant="body2">
                  Abreviatura: {departamento.abreviatura}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListaDepartamento;
