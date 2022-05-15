import { MedicalRecord } from "../MedicalRecords/MedicalRecord";

/*
 * EVENTLISTENERS La interfaz de Observer declara el método de actualización, utilizado por los sujetos.
 */
export interface IObserver {
  update(medicalRecord: MedicalRecord): void;
  update(
    newMedicalRecord: MedicalRecord,
    oldMedicalRecord: MedicalRecord
  ): void;
}
