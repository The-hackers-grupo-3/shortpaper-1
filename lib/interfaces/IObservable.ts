/*
 * EDITOR La interfaz Observable declara un conjunto de métodos para administrar suscriptores.
 */

import { IObserver } from "./IObserver";

export interface IObservable {
  attach(o: IObserver): void;
  detach(o: IObserver): void;
  notify(): void;
}
