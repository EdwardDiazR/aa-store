import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta, VentaDto } from 'src/app/models/venta';
import { Router } from '@angular/router';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  constructor(private http: HttpClient, private _router: Router) {}

  url: string = environment.apiUrl;

  getVentas() {
    return this.http.get<any>(`${this.url}/ventas/ObtenerVentas`);
  }
  crearVenta(ventaDto: VentaDto): any {
    return this.http
      .post<Venta>(`${this.url}/ventas/crearVenta`, ventaDto)
      .subscribe((res: Venta) => {
        console.log(res);
        this._router.navigate(['/ventas/detalle/' + res.idVenta]);
      });
  }

  GetSalesByDate(fecha: any) {
    return this.http.get<Venta[]>(`${this.url}/ventas/getSalesByDate`, {
      params: {
        date: fecha,
      },
    });
  }

  receivePayment(id: number, monto: number) {
    console.log('llamando');

    return this.http.post(
      `${this.url}/ventas/receivePayment?id=${id}&montoPago=${monto}`,
      {
        id: id,
        montoPago: monto,
      }
    );
  }
  cancelarVenta(): void {
    //TODO
  }

  editarVenta(): void {
    //TODO
  }

  detalleVenta(id: Number) {
    return this.http.get<Venta>(`${this.url}/ventas/saleById/${id}`);
  }
}
