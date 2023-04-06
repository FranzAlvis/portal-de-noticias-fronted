export class Categoria {
    id!: number;
    nombre!: string;
    abreviatura!: string;
}

export interface categoriaProps {
    categoria: Categoria;
}