import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalPedidosComponent } from './principal-pedidos.component';

describe('PrincipalPedidosComponent', () => {
  let component: PrincipalPedidosComponent;
  let fixture: ComponentFixture<PrincipalPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincipalPedidosComponent]
    });
    fixture = TestBed.createComponent(PrincipalPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
