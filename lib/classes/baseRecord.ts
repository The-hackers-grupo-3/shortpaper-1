import { MedicalRecord } from "./medicalRecord";
import { Specialty } from "../interfaces/specialty";
import { Patient } from "./patient";

export class BaseRecord extends MedicalRecord implements Specialty {
  createMedicalRecord(patient: Patient): void {
    patient.medicalRecord.addMedicalRecord(this);
  }
  modifyMedicalRecord(specialty: Specialty): void {
    throw new Error("Method not implemented.");
  }
}
