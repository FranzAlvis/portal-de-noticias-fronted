import React from "react";
import { Nav } from "../Nav";

import Titulo from "../Titulo";
import { Categoria } from "../types/categoria";

const Header = () => {
  return (
    <>
      <Titulo></Titulo>
      <Nav categoria={new Categoria}></Nav>
    </>
  );
};

export default Header;
