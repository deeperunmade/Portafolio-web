import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortafolioRoutingModule } from './portafolio-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SobreMiComponent,
    LayoutPageComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PortafolioRoutingModule,
    MaterialModule
  ]
})
export class PortafolioModule { }
