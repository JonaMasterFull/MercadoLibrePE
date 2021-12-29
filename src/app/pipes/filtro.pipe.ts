import { Pipe, PipeTransform } from '@angular/core';
import { ListadoCompras } from '../models/compras';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( compras: ListadoCompras[], page: number = 0, search: string = ''): ListadoCompras[] {
    
    if(search.length === 0){
      return compras.slice(page, page + 6);
    }
    const filterCompras = compras.filter( comp => comp.customerpo.includes(search));

    return filterCompras.slice(page, page + 6);
    
  }

}
