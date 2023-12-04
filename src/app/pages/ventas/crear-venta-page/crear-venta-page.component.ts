import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VentaDto } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/ventas-service/venta.service';

@Component({
  selector: 'app-crear-venta-page',
  templateUrl: './crear-venta-page.component.html',
  styleUrls: ['./crear-venta-page.component.css'],
})
export class CrearVentaPageComponent implements OnInit {
  constructor(private _ventaService: VentaService) {}
  ngOnInit(): void {
    this.formulario.controls['montoDescuento'].disable();
  }

  formulario: FormGroup = new FormGroup({
    nombreCliente: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    nombreProducto: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    precioProducto: new FormControl('', [
      Validators.required,
      Validators.min(0),
    ]),
    aplicaDescuento: new FormControl(false),
    montoDescuento: new FormControl(0, [
      Validators.max(100),
      Validators.min(0),
    ]),
    cantidadCuotas: new FormControl([Validators.min(0), Validators.required]),
  });

  ventaDTO!: VentaDto;
  showDiscount: boolean = false;
  descuento: number = 0;
  aplicaDescuento: boolean = false;

  showDiscountDiv() {
    this.showDiscount = !this.showDiscount;
    if (this.showDiscount == true) {
      this.formulario.controls['montoDescuento'].enable();
    } else {
      this.formulario.controls['montoDescuento'].disable();
      this.formulario.controls['montoDescuento'].setValue(0);
      this.descuento = 0;
    }
    console.log(this.showDiscount);
  }
  onSubmit() {
    if (this.formulario.valid) {
      this.descuento = this.formulario.get('montoDescuento')?.value;
      this.aplicaDescuento = this.formulario.get('aplicaDescuento')?.value;
      if (this.aplicaDescuento == false) this.descuento = 0;
      if (this.aplicaDescuento == true && this.descuento == 0) {
        return alert('El descuento debe ser mayor a cero');
      }
      console.log(this.formulario.value);

      this.ventaDTO = {
        AplicaDescuento: this.aplicaDescuento,
        EstaPago: false,
        MontoDescuento: this.descuento,
        NombreCliente: this.formulario.get('nombreCliente')?.value,
        NombreProducto: this.formulario.get('nombreProducto')?.value,
        PagoEstaPendiente: true,
        PagosPendientes: this.formulario.get('cantidadCuotas')?.value,
        PrecioProducto: this.formulario.get('precioProducto')?.value,
      };
      this.crearVenta(this.ventaDTO);

    }
  }

  crearVenta(venta: VentaDto) {
    this._ventaService.crearVenta(venta);
  }
}
