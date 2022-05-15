import { ISpecialty } from "./ISpecialty";
import { NeurologistRecord } from "../MedicalRecords/NeurologistRecord";
import { Patient } from "../Patient";
import { MedicalRecord } from "../MedicalRecords/MedicalRecord";

export class Neurologist implements ISpecialty {
  createMedicalRecord(
    patient: Patient,
    medicalRecord: NeurologistRecord
  ): void {
    medicalRecord.create(patient);
  }
  modifyMedicalRecord(medicalRecord: MedicalRecord): void {
    medicalRecord.modify(medicalRecord);
  }
}
