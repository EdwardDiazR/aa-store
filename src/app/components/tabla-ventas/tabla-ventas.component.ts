import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/ventas-service/venta.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-tabla-ventas',
  templateUrl: './tabla-ventas.component.html',
  styleUrls: ['./tabla-ventas.component.css'],
})
export class TablaVentasComponent implements OnInit {
  constructor(private _http: HttpClient, private _ventas: VentaService) {}
  ventas!: Venta[];
  deuda!: number;
  cantidad!: number;
  // value = new Date();

  filtrar(date: Date) {
    console.log('filtrado');
    this._ventas
      .GetSalesByDate(new Date(date).toDateString())
      .subscribe((res) => {
        this.ventas = res;
      });
  }

  ngOnInit(): void {
    this._ventas.getVentas().subscribe((res) => {
      this.ventas = res;

      this.cantidad = this.ventas.length;
      console.log(this.ventas);
    });
  }
}
