import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { obtenerCategorias } from "./categorias";
import { Categoria } from "@/components/types/categoria";
import { Departamento } from "@/components/types/departamento";
import { obtenerDepartamentos } from "./departamento";

export function CrearNoticia() {
  const [abrir, setAbrir] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [departamento, setDepartamento] = useState("");
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [autor, setAutor] = useState("");
  const [imagen, setImagen] = useState("");
  const [banner, setBanner] = useState(false);

  const clickAbrir = () => setAbrir(true);
  const clickCerrar = () => {
    setTitulo("");
    setDescripcion("");
    setCategoria("");
    setDepartamento("");
    setAutor("");
    setImagen("");
    setBanner(false);
    setAbrir(false);
  };

  //Obtener Categorias
  useEffect(() => {
    obtenerCategorias().then((categorias) => {
      setCategorias(categorias);
    });
  }, []);

  //Obtener Departamentos
  useEffect(() => {
    obtenerDepartamentos().then((departamentos) => {
      setDepartamentos(departamentos);
    });
  }, []);

  const guardar = () => {
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/noticias`, {
      titulo: titulo,
      descripcion: descripcion,
      idCategoria: categoria,
      idDepartamento: departamento,
      autor: autor,
      imagen: imagen,
      banner: banner,
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
        Crear Noticia
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
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Registrar Noticia
          </Typography>
          <TextField
            label="Titulo"
            fullWidth
            margin="normal"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <TextField
            label="Descripción"
            fullWidth
            margin="normal"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <Box sx={{ minWidth: 120, marginTop: "0.5rem" }}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                value={categoria}
                label="Categoría"
                onChange={(e) => setCategoria(e.target.value)}
              >
                {categorias.map((categoria) => (
                  <MenuItem key={categoria.id} value={categoria.id}>
                    {categoria.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, marginTop: "2rem" }}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Departamento</InputLabel>
              <Select
                value={departamento}
                label="Departamento"
                onChange={(e) => setDepartamento(e.target.value)}
              >
                {departamentos.map((departamento) => (
                  <MenuItem key={departamento.id} value={departamento.id}>
                    {departamento.nombre}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TextField
            label="Autor"
            fullWidth
            margin="normal"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          <TextField
            label="Imagen"
            fullWidth
            margin="normal"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
          />
          <FormControlLabel
            sx={{ display: "flex", justifyContent: "left"}}
            label={banner ? "Con Banner" : "Sin Banner"}
            labelPlacement="start"
            control={
              <Switch
                checked={banner}
                onChange={(e) => setBanner(e.target.checked)}
              />
            }
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
