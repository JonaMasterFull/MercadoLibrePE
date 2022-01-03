import { Pipe, PipeTransform } from '@angular/core';
import { ListadoCompras } from '../models/compras';

@Pipe({
  name: 'filtro2'
})
export class Filtro2Pipe implements PipeTransform {

  transform(compras: ListadoCompras[], page: number = 0, search2: string = ''): ListadoCompras[] {
    
    if(search2.length === 0){
      return compras.slice(page, page + 6);
    }
    const filterCompras = compras.filter( comp => comp.nota_de_venta.includes(search2));

    return filterCompras.slice(page, page + 6);
    
  }

}
