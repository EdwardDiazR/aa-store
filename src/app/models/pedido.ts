 interface Pedido {
    id:number,
    nombreProducto:String,
    cantidadProducto:number,
    statusPedido:String,
    paginaDeCompra:String,
    idCompraPagina:String,
    companiaTransportista:String,
    numeroTracking:String,
    fechaPedido:Date,
    metodoPago:String,
    bancoUtilizado:String,
    tasaDolar:number,
    totalProductoUSD:number,
    totalProductoRDs:number,
    totalCourrier:number,
    courrierUsado:String,
    totalPedidoRDs:number
}

 interface PedidoDto {
    nombreProducto:String,
    CantidadProducto:number,
    StatusPedido:String,
    PaginaDeCompra:String,
    IdCompraPagina:String,
    companiaTransportista:String,
    NumeroTracking:String,
    FechaPedido:Date,
    MetodoPago:String,
    BancoUtilizado:String,
    TasaDolar:number,
    TotalProductoUSD:number,
    TotalCourrier:number,
    CourrierUsado:String,
}

export {Pedido,PedidoDto}

