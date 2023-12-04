import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/ventas-service/venta.service';

@Component({
  selector: 'app-venta-card',
  templateUrl: './venta-card.component.html',
  styleUrls: ['./venta-card.component.css'],
})
export class VentaCardComponent implements OnInit {
  constructor(private _ventaService: VentaService) {}

  @Input() Venta!: Venta;

  deuda!: number;
  ngOnInit(): void {
    if (this.Venta != undefined && this.Venta != null) {
      this.deuda = this.Venta.total - this.Venta.totalPagadoAlaFecha;
    }
  }
}
