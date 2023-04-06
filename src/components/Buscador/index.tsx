import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Buscador = () => {
  return (
    <>
      <Box
        sx={{
          margin: "2rem auto",
          width: 500,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <SearchIcon sx={{ fontSize: "3rem", marginRight: "1rem" }}/>
        <TextField fullWidth label="Buscar" />
      </Box>
    </>
  );
};

export default Buscador;
