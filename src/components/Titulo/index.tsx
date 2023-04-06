import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const Titulo = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#012706",
          color: "#fff",
          padding: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Typography variant="h3">Portal de Noticias</Typography>
        </Grid>
        <Grid item xs={12} sm={1} md={2} lg={1}>
          <Link
            href="/"
            sx={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#98f3be" },
            }}
          >
            <Typography variant="h4">Home</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={3} lg={2}>
          <Link
            href="/categorias"
            sx={{
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#98f3be" },
            }}
          >
            <Typography variant="h4">Categorias</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Titulo;
