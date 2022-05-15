/*
 * EDITOR La interfaz Observable declara un conjunto de métodos para administrar suscriptores.
 */

import { IObserver } from "../AuditRecord/IObserver";
import { IRecordChange } from "../AuditRecord/IRecordChange";

export interface IObservable {
  attach(o: IObserver): void;
  detach(o: IObserver): void;
  notify(recordChange: IRecordChange): void;
}
