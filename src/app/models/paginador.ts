import { ListadoCompras } from './compras';
export interface Paginador {
    count: number;
    next: null;
    previus: null;
    results: ListadoCompras[];
}