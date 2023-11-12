import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info:InfoPage = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http:HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();


   }

   private cargarInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe((resp:InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo(){
    this.http.get('https://portafolio-web-39ce8-default-rtdb.firebaseio.com/proyectos.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
    });
   }
}
