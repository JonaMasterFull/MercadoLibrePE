import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ListadoCompras } from '../../models/compras';
//Exportar PDF
import * as pdfJS from 'print-js';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  
  comprasListado!: ListadoCompras[];
  href = '../appleml/';
  public pages: number = 0;
  public pages2: number = 0;
  public pages3: number = 0;
  public pages4: number = 0;
  public pages5: number = 0;
  
  public search: string = '';
  public search2: string = '';
  public search3: string = '';
  public search4: string = '';
  public search5: string = '';

  constructor(private api:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.api.getguias().subscribe(data => {
      console.log(data);
      this.comprasListado = data;
})
  }
  descargar(customerpo : String){
    pdfJS(this.href + customerpo + '.pdf');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Descargando',
      showConfirmButton: false,
      timer: 1500
    })
  }



  delete(id: String, i : number){
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Quiero Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteguias(id).subscribe();
        this.comprasListado.splice(i, 1);
        this.router.navigateByUrl('/guias');
        Swal.fire(
          'Eliminado!',
          'Su archivo ha sido eliminado',
          'success'
        )
      
      }else if (result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'Cancelado',
          'Tu Archivo esta a salvo :)',
          'error'
        )
      }
      
    })
  }

  nextpage(){
    if(this.pages){
      this.pages += 0;
    }
    this.pages += 5;
  }
  previuspage(){
    if(this.pages > 0){
      this.pages -= 5;
    }
  }

  buscarCustomerPO( buscar: string){
    this.pages = 0;
    this.search = buscar;
  }
  buscarNotaVenta(buscar: string){
    this.pages2 = 0;
    this.search2 = buscar;
  }
  buscarMercadoLibre(buscar: string){
    this.pages3 = 0;
    this.search3 = buscar;
  }
  buscarGuiaRastreo(buscar: string){
    this.pages4 = 0;
    this.search4 = buscar;
 
  }
  buscarFecha(buscar: string){
    this.pages5 = 0;
    this.search5 = buscar;
    console.log(buscar);
  }

}
