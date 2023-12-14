import { Component } from '@angular/core';
import { CarritoService } from '../core/services/carrito.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public carritoService: CarritoService) {}
  
    cambiarCantidad(cantidad:number, idProducto:number){
      console.log(cantidad,idProducto)
      this.carritoService.modificarCantidadProducto(idProducto,cantidad);
    }

}
