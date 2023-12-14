import { Component, inject } from '@angular/core';
import { DatosService } from '../core/services/formulario.service';
import { Datos } from '../core/interfaces/datos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {


datosService = inject(DatosService);


}
