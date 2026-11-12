import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Movimiento } from '../movimiento.model';

@Component({
  selector: 'app-nuevo-movimiento',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-movimiento.html',
  styleUrl: './nuevo-movimiento.css',
})
export class NuevoMovimiento {
  saldo = input<number>(0);

  movimientoCreado = output<Movimiento>();

  tipo: 'RECARGA' | 'GASTO' = 'RECARGA';

  monto: number | null = null;

  mensajeError = '';

  registrarMovimiento(): void {
    if (!this.formularioValido()) {
      return;
    }

    this.movimientoCreado.emit({
      tipo: this.tipo,
      monto: this.monto!,
      fecha: new Date(),
    });

    this.tipo = 'RECARGA';
    this.monto = null;
  }

  obtenerError(): string {
    if (this.monto === null || isNaN(this.monto)) {
      return 'Debe ingresar un monto válido';
    }

    if (this.monto <= 0) {
      return 'El monto debe ser mayor que cero';
    }

    if (this.tipo === 'GASTO' && this.monto > this.saldo()) {
      return 'Saldo insuficiente para realizar el gasto';
    }

    return '';
  }

  formularioValido(): boolean {
    return this.obtenerError() === '';
  }
}
