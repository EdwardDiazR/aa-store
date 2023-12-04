import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VentasPageComponent } from './pages/ventas/ventas-page/ventas-page.component';
import { TablaVentasComponent } from './components/tabla-ventas/tabla-ventas.component';
import { VentaService } from './services/ventas-service/venta.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import { DetalleVentaComponent } from './pages/ventas/detalle-venta/DetalleVentaComponent';
import { VentaCardComponent } from './components/venta-card/venta-card.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { CrearVentaPageComponent } from './pages/ventas/crear-venta-page/crear-venta-page.component';
import { PrincipalPedidosComponent } from './pages/pedidos/principal-pedidos/principal-pedidos.component';
import { PedidosService } from './services/pedidos-service/pedidos.service';
import { TablaPedidosComponent } from './components/tabla-pedidos/tabla-pedidos.component';
import { NuevoPedidoFormComponent } from './components/nuevo-pedido-form/nuevo-pedido-form.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { ActualizarPedidoPageComponent } from './pages/pedidos/actualizar-pedido-page/actualizar-pedido-page.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    HomePageComponent,
    NavBarComponent,
    VentasPageComponent,
    TablaVentasComponent,
    DetalleVentaComponent,
    VentaCardComponent,
    CrearVentaPageComponent,
    PrincipalPedidosComponent,
    TablaPedidosComponent,
    NuevoPedidoFormComponent,
    SpinnerComponent,
    ActualizarPedidoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [VentaService,PedidosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
