import { Specialty } from "./Specialty";
import { NeurologistRecord } from "../MedicalRecords/NeurologistRecord";
import { Patient } from "../patient";
import { MedicalRecord } from "../MedicalRecords/MedicalRecord";

export class Neurologist implements Specialty {
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
