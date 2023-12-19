import { Component } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [`

  .card{
    transition: .5s linear;
  }

  @media (min-width: 768px){
    .card:hover {
    scale: 1.2;
    z-index:1;
    }
  }


  `
  ]
})
export class ProyectosComponent {
  constructor(public _servicio:InfoPageService){}
}
