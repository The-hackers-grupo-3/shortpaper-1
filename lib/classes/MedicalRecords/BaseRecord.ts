import { MedicalRecord } from "./MedicalRecord";
import { Patient } from "../Patient";
import { RecordChangeBase } from "../AuditRecord/RecordChangeBase";

export class BaseRecord extends MedicalRecord {
  public createMedicalRecord(patient: Patient): void {
    this.create(patient);
  }

  public modifyMedicalRecord(baseRecord: BaseRecord): void {
    this.modify(baseRecord);
  }

  public create(patient: Patient): void {
    const todayDate = new Date();
    const recordChange = new RecordChangeBase(todayDate, this);
    patient.medicalRecord.addMedicalRecord(this);
    this.notify(recordChange);
  }

  public modify(baseRecord: BaseRecord): void {
    const todayDate = new Date();
    const recordChange = new RecordChangeBase(todayDate, baseRecord, this);
    this.Id = baseRecord.Id;
    this.CreationDate = baseRecord.CreationDate;
    this.Weight = baseRecord.Weight;
    this.Height = baseRecord.Height;
    this.PersonalHistory = baseRecord.PersonalHistory;
    this.HeartRate = baseRecord.HeartRate;
    this.BloodPressure = baseRecord.BloodPressure;
    this.Saturation = baseRecord.Saturation;
    this.notify(recordChange);
  }
}
