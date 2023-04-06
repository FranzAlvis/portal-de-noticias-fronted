import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import Titulo from "@/components/Titulo";
import { Categoria } from "@/components/types/categoria";
import { NextPage } from "next";

const Categorias: NextPage = () => {
  return (
    <>
      <Titulo></Titulo>
      <Nav categoria={new Categoria}></Nav>
      <Footer></Footer>
    </>
  );
};

export default Categorias;
