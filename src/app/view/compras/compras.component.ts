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

  comprasListado: ListadoCompras[] | undefined;
  href = '../appleml/';
  
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
}
