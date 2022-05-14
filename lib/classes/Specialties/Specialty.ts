import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { Patient } from "../patient";

export interface Specialty {
  createMedicalRecord(patient: Patient, medicalRecord: MedicalRecord): void;
  modifyMedicalRecord(medicalRecord: MedicalRecord): void;
}
