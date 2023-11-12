import { Component } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styles: [`

  .card:hover {
  box-shadow: 5px 5px 20px #263D92;
  transform: translateY(-3%);
  }

  `
  ]
})
export class ProyectosComponent {
  constructor(public _servicio:InfoPageService){}
}
