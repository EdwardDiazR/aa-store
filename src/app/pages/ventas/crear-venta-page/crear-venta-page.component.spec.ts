import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVentaPageComponent } from './crear-venta-page.component';

describe('CrearVentaPageComponent', () => {
  let component: CrearVentaPageComponent;
  let fixture: ComponentFixture<CrearVentaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVentaPageComponent]
    });
    fixture = TestBed.createComponent(CrearVentaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
