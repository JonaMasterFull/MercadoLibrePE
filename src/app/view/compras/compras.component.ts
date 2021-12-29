import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { ListadoCompras } from '../../models/compras';
//Exportar PDF
import * as pdfJS from 'print-js'

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  
  comprasListado!: ListadoCompras[];
  href = '../appleml/';
  public pages: number =0;
  public search: string = '';

  constructor(private api:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.api.getallCompras().subscribe(data => {
      console.log(data);
      this.comprasListado = data;
})
  }
  descargar(customerpo : String){
    pdfJS(this.href + customerpo + '.pdf');
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

  buscarCompra( buscar: string){
    this.pages = 0;
    this.search = buscar;
  }

}
