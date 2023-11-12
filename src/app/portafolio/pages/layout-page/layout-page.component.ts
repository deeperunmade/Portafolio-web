import { InfoPageService } from './../../../services/info-page.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['layout-page.component.css']
})
export class LayoutPageComponent {

  constructor(public _servicio:InfoPageService){}

}
