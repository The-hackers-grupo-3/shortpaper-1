import { CardiologistRecord } from "../MedicalRecords/CardiologistRecord";
import { MedicalRecord } from "../MedicalRecords/MedicalRecord";
import { Patient } from "../Patient";
import { ISpecialty } from "./ISpecialty";

export class Cardiologist implements ISpecialty {
  public createMedicalRecord(
    patient: Patient,
    medicalRecord: CardiologistRecord
  ): void {
    medicalRecord.create(patient);
  }

  public modifyMedicalRecord(medicalRecord: MedicalRecord): void {
    medicalRecord.modify(medicalRecord);
  }
}
