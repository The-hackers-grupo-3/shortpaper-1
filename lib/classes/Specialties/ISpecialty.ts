import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { Patient } from "../Patient";

export interface ISpecialty {
  createMedicalRecord(patient: Patient, medicalRecord: MedicalRecord): void;
  modifyMedicalRecord(medicalRecord: MedicalRecord): void;
}
