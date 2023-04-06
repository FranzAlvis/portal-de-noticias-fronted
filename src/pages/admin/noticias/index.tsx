import { CrearNoticia } from "@/components/Crear/BotonNoticia";
import Footer from "@/components/Footer";
import ListarNoticias from "@/components/Listar/ListarNoticias";
import TituloAdmin from "@/components/TituloAdmin";
import { NextPage } from "next";


const AdminNoticias: NextPage = () => {
  
  return (
    <>
      <TituloAdmin></TituloAdmin>
      <CrearNoticia></CrearNoticia>
      <ListarNoticias></ListarNoticias>
      <Footer></Footer>
    </>
  );
};

export default AdminNoticias;
