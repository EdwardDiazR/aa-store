import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPedidoPageComponent } from './actualizar-pedido-page.component';

describe('ActualizarPedidoPageComponent', () => {
  let component: ActualizarPedidoPageComponent;
  let fixture: ComponentFixture<ActualizarPedidoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarPedidoPageComponent]
    });
    fixture = TestBed.createComponent(ActualizarPedidoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
