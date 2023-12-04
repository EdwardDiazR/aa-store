import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPageComponent } from './ventas-page.component';

describe('VentasPageComponent', () => {
  let component: VentasPageComponent;
  let fixture: ComponentFixture<VentasPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasPageComponent]
    });
    fixture = TestBed.createComponent(VentasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
