import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interface/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info:InfoPage = {};
  cargando = true;

  equipo: any[] = [];

  constructor( private http:HttpClient) {
    this.cargarInfo();
    this.cargarProyectos();
   }

   private cargarInfo() {
    this.http.get('assets/data/data-page.json')
    .subscribe((resp:InfoPage) => {
      this.info = resp;
    });
   }

   private cargarProyectos(){
    this.http.get('https://portafolio-web-39ce8-default-rtdb.firebaseio.com/proyectos.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
        this.cargando = false;
      
    });
   }
}
