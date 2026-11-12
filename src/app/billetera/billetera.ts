import { Component } from '@angular/core';
import { Movimiento } from '../movimiento.model';
import { NuevoMovimiento } from '../nuevo-movimiento/nuevo-movimiento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-billetera',
  standalone: true,
  imports: [CommonModule, NuevoMovimiento],
  templateUrl: './billetera.html',
  styleUrl: './billetera.css',
})
export class Billetera {
  saldo = 250;

  movimientos: Movimiento[] = [];

  registrarMovimiento(movimiento: Movimiento): void {
    if (movimiento.tipo === 'RECARGA') {
      this.saldo += movimiento.monto;
    } else {
      this.saldo -= movimiento.monto;
    }
    this.movimientos.unshift(movimiento);
  }
}
