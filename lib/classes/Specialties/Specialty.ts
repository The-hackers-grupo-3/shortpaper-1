import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { Patient } from "../Patient";

export interface Specialty {
  createMedicalRecord(patient: Patient, medicalRecord: MedicalRecord): void;
  modifyMedicalRecord(medicalRecord: MedicalRecord): void;
}
