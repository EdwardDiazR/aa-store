import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

@Component({
  selector: 'app-tabla-pedidos',
  templateUrl: './tabla-pedidos.component.html',
  styleUrls: ['./tabla-pedidos.component.css'],
})
export class TablaPedidosComponent {
  constructor(private _pedidoService: PedidosService) {}
  @Input() pedidos: Pedido[] = [];

  ir(numero: String, compania: String) {
    if (compania == 'USPS') {
      window.open(
        `https://tools.usps.com/go/TrackConfirmAction_input?strOrigTrackNum=${numero}`
      );
    } else if (compania == 'DHL') {
      window.open(
        `https://www.dhl.com/us-en/home/tracking/tracking-ecommerce.html?submit=1&tracking-id=${numero}`
      );
    }
  }

  
}
