export class Departamento {
    id!: string;
    nombre!: string;
    abreviatura!: string;
}

export interface departamentoProps {
    departamento: Departamento;
}