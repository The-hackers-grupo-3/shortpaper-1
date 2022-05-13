import { MedicalRecord } from "./medicalRecord";
import { Specialty } from "../interfaces/specialty";
import { Patient } from "./patient";

export class BaseRecord extends MedicalRecord implements Specialty {
  createMedicalRecord(patient: Patient): void {
    patient.medicalRecord.addMedicalRecord(this);
  }
  modifyMedicalRecord(baseRecord: BaseRecord): void {
    this.Id = baseRecord.Id;
    this.CreationDate = baseRecord.CreationDate;
    this.Weight = baseRecord.Weight;
    this.Height = baseRecord.Height;
    this.PersonalHistory = baseRecord.PersonalHistory;
    this.HeartRate = baseRecord.HeartRate;
    this.BloodPressure = baseRecord.BloodPressure;
    this.Saturation = baseRecord.Saturation;
  }
}
