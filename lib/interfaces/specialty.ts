import { Patient } from "../classes/patient";

export interface Specialty {
  createMedicalRecord(patient: Patient): Specialty;
  modifyMedicalRecord(specialty: Specialty): void;
}
