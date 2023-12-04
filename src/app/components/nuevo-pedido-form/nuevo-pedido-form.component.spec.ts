import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPedidoFormComponent } from './nuevo-pedido-form.component';

describe('NuevoPedidoFormComponent', () => {
  let component: NuevoPedidoFormComponent;
  let fixture: ComponentFixture<NuevoPedidoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoPedidoFormComponent]
    });
    fixture = TestBed.createComponent(NuevoPedidoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
