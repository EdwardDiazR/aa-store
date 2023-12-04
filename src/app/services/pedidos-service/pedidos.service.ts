import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { environment } from 'src/environment';
import { Pedido, PedidoDto } from 'src/app/models/pedido';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, retry, throwError, timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  constructor(
    private _http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  obtenerPedidos() {
    return this._http.get<any>(`${environment.apiUrl}/pedidos/obtener`);
  }

  obtenerStatus(id: number) {
    const statusUrl = `${environment.apiUrl}/pedidos/obtenerStatus/${id}`;
    const options = { params: new HttpParams().set('id', id) };
    return this._http.get(statusUrl, options);
  }

  crearPedido(pedido: PedidoDto) {
    return this._http
      .post<PedidoDto>(`${environment.apiUrl}/pedidos/crear`, pedido)
      .subscribe((res) => {
        this.toastr.success(
          'Pedido agregado exitosamente',
          'Nuevo pedido agregado'
        );
        this.router.navigateByUrl('/pedidos');
      });
  }

  recibirEnMiami(id: number) {
    return this._http.put(
      `${environment.apiUrl}/pedidos/recibirEnMiami/${id}`,
      id
    );
  }

  recibirEnCourrier(id: number) {
    const url = `${environment.apiUrl}/pedidos/recibirEnCourrier/${id}`;

    return this._http.put(url, id);
  }

  recibirFinal(id: number, TotalCourrier: Number) {
    const options = { params: new HttpParams().set('id', id) };
    return this._http.put(
      `${environment.apiUrl}/pedidos/recibirFinal/${id}?TotalCourrier=${TotalCourrier}`,
      id
    );
  }
}
