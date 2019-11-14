import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimientosPage } from './movimientos.page';
import { ModalMovimientoPage } from '../modal-movimiento/modal-movimiento.page';
import { ModalMovimientoPageModule } from '../modal-movimiento/modal-movimiento.module';

const routes: Routes = [
  {
    path: '',
    component: MovimientosPage
  }
];

@NgModule({
  entryComponents: [
    ModalMovimientoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ModalMovimientoPageModule
  ],
  exports: [
  ],
  declarations: [MovimientosPage]
})
export class MovimientosPageModule {}