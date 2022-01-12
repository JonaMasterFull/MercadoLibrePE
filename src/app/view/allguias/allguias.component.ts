import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Router } from '@angular/router';
import { ListadoCompras } from '../../models/compras';
import * as pdfJS from 'print-js';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-allguias',
  templateUrl: './allguias.component.html',
  styleUrls: ['./allguias.component.css']
})
export class AllguiasComponent implements OnInit {
  href = '../appleml/';
  comprasListado!: ListadoCompras[];
  pdfSrc = "";
  public pages: number = 0;
  public search: string = '';

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
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Descargando',
      showConfirmButton: false,
      timer: 1500
    })
  }

  buscarCustomerPO(text : string){
      console.log(text);
      this.pages = 0;
      this.search = text;
  }

  


}

