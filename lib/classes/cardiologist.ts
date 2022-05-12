import { Specialty } from "../interfaces/specialty";
import { Doctor } from "./doctor";
import { MedicalRecord } from "./medicalRecord";
import { Patient } from "./patient";

class Cardiologist extends MedicalRecord implements Specialty {
  private _QRSduration: number;
  private _QTc: number;
  private _Pwave: number;

  constructor(
    QRSduration: number,
    Qtc: number,
    Pwave: number,
    id: string,
    creationDate: Date,
    doctor: Doctor,
    patient: Patient,
    weight: number,
    height: number,
    personalHistory: string,
    heartRate: number,
    bloodPressure: number,
    saturation: number
    //registers: MedicalRecord
  ) {
    super(
      id,
      creationDate,
      doctor,
      patient,
      weight,
      height,
      personalHistory,
      heartRate,
      bloodPressure,
      saturation
      //registers,
    );
    this._QRSduration = QRSduration;
    this._QTc = Qtc;
    this._Pwave = Pwave;
  }

  createMedicalRecord(patient: Patient): Specialty {
    throw new Error("Method not implemented.");
  }
  modifyMedicalRecord(): void {
    throw new Error("Method not implemented.");
  }
}
