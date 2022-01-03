import { Pipe, PipeTransform } from '@angular/core';
import { ListadoCompras } from '../models/compras';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( compras: ListadoCompras[], pages: number = 0, search: string = ''): ListadoCompras[] {
    
    if(search.length === 0){
      return compras.slice(pages, pages + 6);
    }
    const filterCompras = compras.filter( comp => comp.customerpo.includes(search));

    return filterCompras.slice(pages, pages + 6);
    
  }

}
