import { useState } from "react";
import { Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";

export function CrearDepartamento() {
  const [abrir, setAbrir] = useState(false);
  const [nombre, setNombre] = useState("");
  const [abreviatura, setAbreviatura] = useState("");

  const clickAbrir = () => setAbrir(true);
  const clickCerrar = () => {
    setNombre("");
    setAbreviatura("");
    setAbrir(false);
  }

  const guardar = () => {
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/departamentos`, {
      nombre: nombre,
      abreviatura: abreviatura,
    });
    clickCerrar();
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={clickAbrir}
        sx={{
          margin: "2rem 2rem 0 2rem",
        }}
      >
        Crear Departamento
      </Button>
      <Modal open={abrir} onClose={clickCerrar}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "0.5rem",
          }}
        >
          <Typography variant="h5" sx={{textAlign: "center"}}>Registrar Departamento</Typography>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            label="Abreviatura"
            fullWidth
            margin="normal"
            value={abreviatura}
            onChange={(e) => setAbreviatura(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "1rem 1rem 1rem 0" }}
            onClick={guardar}
          >
            Guardar
          </Button>
          <Button variant="contained" onClick={clickCerrar}>
            Cancelar
          </Button>
        </div>
      </Modal>
    </>
  );
}
