import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoCompras } from '../models/compras';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url:String = "https://appleamaze.herokuapp.com/";

  constructor(private http:HttpClient) { }

  getallCompras():Observable<ListadoCompras[]>{
    let direccion = this.url + "guias";
    return this.http.get<ListadoCompras[]>(direccion);
  }

}
