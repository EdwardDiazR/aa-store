import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  selector: 'app-actualizar-pedido-page',
  templateUrl: './actualizar-pedido-page.component.html',
  styleUrls: ['./actualizar-pedido-page.component.css'],
})
export class ActualizarPedidoPageComponent implements OnInit {
  constructor(
    private _pedidoService: PedidosService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  totalCourrier: number = 0;
  pedidoId!: number;

  InfoPedido!: any;

  //PENDIENTE = 0,
  //RECIBIDO =1,
  //CANCELADO=2,
  //REEMBOLSADO=3,
  //RECIBIDO_EN_MIAMI = 4,
  //DISPONIBLE_EN_COURRIER=5

  ngOnInit(): void {
    //Obtenemos los parametros de la ruta para acceder a ellos
    //En este caso recuperamos el valor del id del pedido desde la url
    //Para hacer la llamada a la API y obtener el status
    this.route.paramMap.subscribe((params) => {
      this.pedidoId = Number(params.get('id'));
    });

    this._pedidoService.obtenerStatus(this.pedidoId).subscribe((res) => {
      this.InfoPedido = res;

      console.log(this.InfoPedido);
    });
  }

  recibirEnMiami(id: number, status: String) {
    if (status != '4') {
      this._pedidoService.recibirEnMiami(id).subscribe((res) => {
        this.toastr.success('Recibido en MIAMI con exito');
        this.InfoPedido.status = 'RECIBIDO EN MIAMI';
      });
    }
  }

  recibirEnCourrier(id: number) {
    this._pedidoService.recibirEnCourrier(id).subscribe((res) => {
      console.log(res);
    });
  }

  recibirFinal(id: number, status: string, totalCourrier: Number) {
    if (status != 'RECIBIDO' && totalCourrier.valueOf() > 0) {
      this._pedidoService.recibirFinal(id,totalCourrier).subscribe((res) => {
        console.log(res);
        // window.location.reload();
      });
    } else {
      if (totalCourrier.valueOf() <= 0) {
        this.toastr.error(
          'Error en monto',
          'El monto del courrier debe ser mayor a cero'
        );
      }
      if (status == 'RECIBIDO') {
        this.toastr.error(
          'Pedido ya esta recibido',
          'Este pedido ya ha sido recibido'
        );
      }
    }
  }
}
