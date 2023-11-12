import { Component } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {

  constructor(public _servicio:InfoPageService){}

}
