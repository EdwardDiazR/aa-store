import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PedidoDto } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  selector: 'app-nuevo-pedido-form',
  templateUrl: './nuevo-pedido-form.component.html',
  styleUrls: ['./nuevo-pedido-form.component.css'],
})


export class NuevoPedidoFormComponent {

  constructor(private _pedidoService:PedidosService){}
  pedidoForm: FormGroup = new FormGroup({
    nombreProducto: new FormControl('',[Validators.required]),
    cantidadProducto: new FormControl('',[Validators.required]),
    statusPedido: new FormControl('',[Validators.required]),
    paginaDeCompra:new FormControl('',[Validators.required]),
    idCompraPagina:new FormControl('',[Validators.required]),
    companiaTransportista: new FormControl('',[Validators.required]),
    numeroTracking: new FormControl('',[Validators.required]),
    fechaPedido:new FormControl('',[Validators.required]),
    metodoPago:new FormControl('',[Validators.required]),
    bancoUtilizado:new FormControl('',[Validators.required]),
    tasaDolar:new FormControl('',[Validators.required]),
    totalProductoUSD:new FormControl('',[Validators.required]),
    courrierUsado:new FormControl('',[Validators.required]),
    totalCourrier:new FormControl('',[Validators.required])


  });
  show(){
    if(this.pedidoForm.valid){
      this._pedidoService.crearPedido(this.pedidoForm.value as PedidoDto)
}
  }
}


