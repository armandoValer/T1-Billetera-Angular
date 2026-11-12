export interface Movimiento {
  tipo: 'RECARGA' | 'GASTO';
  monto: number;
  fecha: Date;
}
