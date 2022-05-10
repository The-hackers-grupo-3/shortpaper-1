/*
 * EDITOR La interfaz Observable declara un conjunto de métodos para administrar suscriptores.
 */

import { Observer } from "./observer";

export interface Observable {
  attach(o: Observer): void;
  detach(o: Observer): void;
  notify(): void;
}
