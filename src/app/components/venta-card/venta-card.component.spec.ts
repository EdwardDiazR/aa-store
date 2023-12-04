import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCardComponent } from './venta-card.component';

describe('VentaCardComponent', () => {
  let component: VentaCardComponent;
  let fixture: ComponentFixture<VentaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentaCardComponent]
    });
    fixture = TestBed.createComponent(VentaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
