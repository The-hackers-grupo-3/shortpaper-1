import { IRecordChange } from "./IRecordChange";

/*
 * EVENTLISTENERS La interfaz de Observer declara el método de actualización, utilizado por los sujetos.
 */
export interface IObserver {
  update(recordChange: IRecordChange): void;
}
