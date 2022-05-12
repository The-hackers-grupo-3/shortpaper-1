import { Patient } from "../classes/patient";

export interface Specialty {
  createMedicalRecord(patient: Patient): Specialty;
  modifyMedicalRecord(): void;
}
