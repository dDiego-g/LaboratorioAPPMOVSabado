import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMovimientoPage } from './modal-movimiento.page';

describe('ModalMovimientoPage', () => {
  let component: ModalMovimientoPage;
  let fixture: ComponentFixture<ModalMovimientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMovimientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMovimientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});