interface Venta {
  idVenta: number;
  fechaDeVenta: Date;
  nombreCliente: String;
  nombreProductoVendido: String;
  telefonoCliente: String;
  subTotal: number;
  AplicaDescuento: Boolean;
  Descuento: number;
  total: number;
  estaPago: Boolean;
  pagosPendientes: number;
  MontoCuota: number;
  totalPagadoAlaFecha: number;
  CodigoMetodoDePago: number;
  PagoEstaPendiente: Boolean;
  PagoEstaConfirmado: Boolean;
  montosEnTransito: number;
}

interface VentaDto {
  NombreCliente: string;
  NombreProducto: string;
  PrecioProducto: number;
  AplicaDescuento: boolean;
  MontoDescuento: number;
  EstaPago: boolean;
  PagoEstaPendiente: boolean;
  PagosPendientes: number;
}

export { VentaDto, Venta };
