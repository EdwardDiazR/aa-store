import { Component, Input, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/ventas-service/venta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-venta',
  templateUrl: './detalle-venta.component.html',
  styleUrls: ['./detalle-venta.component.css'],
})
export class DetalleVentaComponent implements OnInit {
  constructor(
    private _ventaService: VentaService,
    private route: ActivatedRoute
  ) {}
  detalleVenta!: Venta;

  VentaID!: number;

  showModal!: boolean;
  deuda!: number;

  @Input() montoARecibir!:number;

  getVenta(id: Number): void {
    this._ventaService.detalleVenta(id).subscribe((res) => {
      this.detalleVenta = res;
      this.deuda =
        this.detalleVenta.total - this.detalleVenta.totalPagadoAlaFecha;
      console.log(res);
    });
  }

  abrirPagoModal() {
    console.log('opening modal');
    this.showModal = true;
  }

  cerrarPagoModal() {
    this.showModal = false;
    console.log('closing modal');

  }

  recibirPago(monto: number) {
    if (monto <= this.deuda) {
      this._ventaService
        .receivePayment(this.detalleVenta.idVenta, monto)
        .subscribe((res) => console.log(res));
        window.location.reload();
    }else if(monto == undefined){
      monto=0
      alert("monto debe ser mayor que 0")
    } 
    else {
      alert('El monto a pagar no puede ser mayor al monto adeudado');
    }
  }
  ngOnInit(): void {
    this.showModal = false;
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
      this.VentaID = parseInt(params.get('id')!.toString());
      this.getVenta(this.VentaID);
    });
  }
}
