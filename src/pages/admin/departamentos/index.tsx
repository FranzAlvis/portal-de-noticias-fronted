import { CrearDepartamento } from "@/components/Crear/BotonDepartamento";
import Footer from "@/components/Footer";
import ListaDepartamento from "@/components/Listar/ListarDepartamento";
import TituloAdmin from "@/components/TituloAdmin";
import { NextPage } from "next";

const AdminDepartamentos: NextPage = () => {
  
  return (
    <>
      <TituloAdmin></TituloAdmin>
      <CrearDepartamento></CrearDepartamento>
      <ListaDepartamento></ListaDepartamento>
      <Footer></Footer>
    </>
  );
};

export default AdminDepartamentos;
