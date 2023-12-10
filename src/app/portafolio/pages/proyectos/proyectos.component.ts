import { Component } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [`

  .card:hover {
  box-shadow: 20px 20px 80px #263D92;
  transform: translateY(-3%);
  }
  .card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

  `
  ]
})
export class ProyectosComponent {
  constructor(public _servicio:InfoPageService){}
}
