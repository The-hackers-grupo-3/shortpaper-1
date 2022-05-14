import { MedicalRecord } from "./MedicalRecord";
import { Patient } from "../Patient";

export class BaseRecord extends MedicalRecord {
  public createMedicalRecord(patient: Patient): void {
    this.create(patient);
  }

  public modifyMedicalRecord(baseRecord: BaseRecord): void {
    this.modify(baseRecord);
  }

  public create(patient: Patient): void {
    patient.medicalRecord.addMedicalRecord(this);
    this.notify();
  }

  public modify(baseRecord: BaseRecord): void {
    this.Id = baseRecord.Id;
    this.CreationDate = baseRecord.CreationDate;
    this.Weight = baseRecord.Weight;
    this.Height = baseRecord.Height;
    this.PersonalHistory = baseRecord.PersonalHistory;
    this.HeartRate = baseRecord.HeartRate;
    this.BloodPressure = baseRecord.BloodPressure;
    this.Saturation = baseRecord.Saturation;
    this.notify();
  }
}
