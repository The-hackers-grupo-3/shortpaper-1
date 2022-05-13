import { Patient } from "../classes/patient";

export interface Specialty {
  createMedicalRecord(patient: Patient): void;
  modifyMedicalRecord(specialty: Specialty): void;
}
