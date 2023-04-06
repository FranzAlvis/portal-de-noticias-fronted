import { Categoria } from "./categoria";
import { Departamento } from "./departamento";

export class Noticia {
    id!: string;
    titulo!: string;
    descripcion!: string;
    fechaCreacion?: string;
    idCategoria!: string;
    idDepartamento!: string;
    autor!: string;
    imagen?: string;
    banner!: boolean;
    categoria!: Categoria;
    departamento!: Departamento;
}

export interface noticiaProps {
    noticia: Noticia;
}