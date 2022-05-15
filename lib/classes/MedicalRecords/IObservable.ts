/*
 * EDITOR La interfaz Observable declara un conjunto de métodos para administrar suscriptores.
 */

import { IObserver } from "../AuditRecord/IObserver";
import { MedicalRecord } from "./MedicalRecord";

export interface IObservable {
  attach(o: IObserver): void;
  detach(o: IObserver): void;
  notify(medicalRecord: MedicalRecord): void; //created
  notify(
    newMedicalRecord: MedicalRecord, //modify
    oldMedicalRecord: MedicalRecord
  ): void;
}
