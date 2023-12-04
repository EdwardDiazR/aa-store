import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VentasPageComponent } from './pages/ventas/ventas-page/ventas-page.component';
import { DetalleVentaComponent } from './pages/ventas/detalle-venta/DetalleVentaComponent';
import { CrearVentaPageComponent } from './pages/ventas/crear-venta-page/crear-venta-page.component';
import { PrincipalPedidosComponent } from './pages/pedidos/principal-pedidos/principal-pedidos.component';
import { NuevoPedidoFormComponent } from './components/nuevo-pedido-form/nuevo-pedido-form.component';
import { ActualizarPedidoPageComponent } from './pages/pedidos/actualizar-pedido-page/actualizar-pedido-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'productos', component: ProductCardComponent },
  { path: 'ventas', component: VentasPageComponent },
  { path: 'ventas/detalle/:id', component: DetalleVentaComponent },
  { path: 'ventas/crear', component: CrearVentaPageComponent },
  { path: 'pedidos', component: PrincipalPedidosComponent },
  { path: 'pedidos/agregar', component: NuevoPedidoFormComponent },
  { path: 'pedidos/:id/actualizarStatus', component: ActualizarPedidoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
