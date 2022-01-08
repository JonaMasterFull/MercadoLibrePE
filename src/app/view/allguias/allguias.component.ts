import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { ListadoCompras } from '../../models/compras';
import * as pdfJS from 'print-js';


@Component({
  selector: 'app-allguias',
  templateUrl: './allguias.component.html',
  styleUrls: ['./allguias.component.css']
})
export class AllguiasComponent implements OnInit {
  href = '../appleml/';
  comprasListado!: ListadoCompras[];
  pdfSrc = "";
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getallguias().subscribe(data => {
      console.log(data);
      this.comprasListado = data;
    })
  }

  descargar(customerpo : String){
    pdfJS(this.href + customerpo + '.pdf');
    this.pdfSrc = this.href + customerpo + '.pdf';
  }


  


}

