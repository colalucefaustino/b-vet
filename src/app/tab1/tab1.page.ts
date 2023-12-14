import { Component, inject } from '@angular/core';
import { DatosService } from '../core/services/formulario.service';
import { CATEGORIAS } from '../core/constants/categorias';
import { Categoria } from '../core/interfaces/categorias';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
[x: string]: any;
  
  categorias:Categoria[] = CATEGORIAS;
  cambiarDias(dias:number): void {
  this.datosService.cambiarDias(dias);

}

  constructor() {
    
  }

  datosService = inject(DatosService);


}

