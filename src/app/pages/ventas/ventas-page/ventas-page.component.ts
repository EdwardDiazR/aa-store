import { Component, Input, OnInit } from '@angular/core';
import { Venta, VentaDto } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/ventas-service/venta.service';

@Component({
  selector: 'app-ventas-page',
  templateUrl: './ventas-page.component.html',
  styleUrls: ['./ventas-page.component.css'],
})
export class VentasPageComponent implements OnInit {
  constructor(private _ventaService: VentaService) {}

  // @Input() venta:Venta={
  //   IdVenta:Number =1,

  // };

  ventas!: Venta[];
  ventaDTO:VentaDto={
    AplicaDescuento:false,
    EstaPago:false,
    MontoDescuento:0,
    NombreCliente:"probando",
    NombreProducto:"perfume prueba",
    PagoEstaPendiente:true,
    PagosPendientes:2,
    PrecioProducto:2400

  }
  crearVenta(ventaD:VentaDto) {
    this._ventaService.crearVenta(ventaD);
  }

  getVentas() {
    this._ventaService.getVentas().subscribe((res) => {
      this.ventas = res;
      console.log(res);
    });
  }
  ngOnInit(): void {
    console.log('@');

    // this.crearVenta(this.ventaDTO)
    // this.getVentas()
  }
}
