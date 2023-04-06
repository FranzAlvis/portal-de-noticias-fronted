import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import CategoryIcon from "@mui/icons-material/Category";

const Titulo = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#0c3a75",
          color: "#fff",
          padding: "1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: "flex" }}>
          <SupervisorAccountIcon
            sx={{ fontSize: "3rem", marginRight: "1rem" }}
          ></SupervisorAccountIcon>
          <Typography variant="h3">Admin</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1}>
          <Link
            href="/admin/noticias"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#98f3be" },
            }}
          >
            <NewspaperIcon
              sx={{ fontSize: "3rem", marginRight: "1rem" }}
            ></NewspaperIcon>
            <Typography variant="h4">Noticias</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={1}>
          <Link
            href="/admin/categorias"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#98f3be" },
            }}
          >
            <CategoryIcon
              sx={{ fontSize: "3rem", marginRight: "1rem" }}
            ></CategoryIcon>
            <Typography variant="h4">Categorias</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={2}>
          <Link
            href="/admin/departamentos"
            sx={{
              display: "flex",
              alignContent: "center",
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s",
              "&:hover": { color: "#98f3be" },
            }}
          >
            <NewspaperIcon
              sx={{ fontSize: "3rem", marginRight: "1rem" }}
            ></NewspaperIcon>
            <Typography variant="h4">Departamentos</Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Titulo;
