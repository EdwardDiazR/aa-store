import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  selector: 'app-principal-pedidos',
  templateUrl: './principal-pedidos.component.html',
  styleUrls: ['./principal-pedidos.component.css'],
})
export class PrincipalPedidosComponent implements OnInit {
  constructor(private _pedidoService: PedidosService) {}

  pedidos: Pedido[] = [];
  totalRD: Number = 0;
  totalUSD: Number = 0;
  cantidadPedidos: Number = 0;
  pedidosPendientes: Number = 0;
  pedidosEnMiami: Number = 0;

  //STATUS 0: PENDIENTE
  //STATUS 1:RECIBIDO
  //STATUS 4:RECIBIDO EN MIAMI

  ngOnInit(): void {
    //Call the Pedido's service ObtenerPedido to call the API, to return the Orders
    this._pedidoService.obtenerPedidos().subscribe((res) => {
      console.log(res);

      //Set my pedidos array with the api response of Orders
      this.pedidos = res as Pedido[];

      //Get sum of all Orders in RD$
      this.totalRD = this.pedidos.reduce((acumulador, valorActual) => {
        return acumulador + valorActual.totalProductoRDs;
      }, 0);

      //Get sum of all Orders in USD
      this.totalUSD = this.pedidos.reduce((acumulador, valorActual) => {
        return acumulador + valorActual.totalProductoUSD;
      }, 0);

      //Get count of All Orders
      this.cantidadPedidos = this.pedidos.length;

      //Get count of Orders pending of Miami Receivement
      this.pedidosPendientes = this.pedidos.filter(
        (value) => value.statusPedido == '0'
      ).length;

      //Get count of Orders in Miami
      this.pedidosEnMiami = this.pedidos.filter(
        (value) => value.statusPedido == '4'
      ).length;

      //Set a Name for the Order status depending of the status code
      this.pedidos.forEach((e) => {
        if (e.statusPedido == '0') {
          //If StatusCode is 0, set the name to PENDIENTE
          e.statusPedido = 'PENDIENTE';
        }
        if (e.statusPedido == '1') {
          //If StatusCode is 1, set the name to RECIBIDO
          e.statusPedido = 'RECIBIDO';
        }
        if (e.statusPedido == '2') {
          //If StatusCode is 2, set the name to CANCELADO
          e.statusPedido = 'CANCELADO';
        }
        if (e.statusPedido == '3') {
          //If StatusCode is 3, set the name to REEMBOLSADO
          e.statusPedido = 'REEMBOLSADO';
        }
        if (e.statusPedido == '4') {
          //If StatusCode is 4, set the name to RECIBIDO EN MIAMI
          e.statusPedido = 'RECIBIDO EN MIAMI';
        }
        if (e.statusPedido == '5') {
          //If StatusCode is 4, set the name to RECIBIDO EN MIAMI
          e.statusPedido = 'DISPONIBLE EN COURRIER';
        }
      });
    });
  }
}
