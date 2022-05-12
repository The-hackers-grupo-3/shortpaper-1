import { Specialty } from "../interfaces/specialty";
import { MedicalRecord } from "./medicalRecord";
import { Patient } from "./patient";

export class Cardiologist extends MedicalRecord implements Specialty {
  private _QRSduration: number | null;
  private _QTc: number | null;
  private _Pwave: number | null;

  constructor(
    id: string,
    creationDate: Date | null,
    weight: number | null,
    height: number | null,
    personalHistory: string | null,
    heartRate: number | null,
    bloodPressure: number | null,
    saturation: number | null,
    QRSduration: number | null,
    Qtc: number | null,
    Pwave: number | null
    //registers: MedicalRecord
  ) {
    super(
      id,
      creationDate || new Date(),
      weight || null,
      height || null,
      personalHistory || null,
      heartRate || null,
      bloodPressure || null,
      saturation || null
      //registers,
    );
    this._QRSduration = QRSduration || null;
    this._QTc = Qtc || null;
    this._Pwave = Pwave || null;
  }

  //------------------------------
  //------GETTERS & SETTERS-------
  //------------------------------

  public get QRSduration() {
    return this._QRSduration;
  }

  public set QRSduration(QRSduration: number | null) {
    if (QRSduration == null) {
      return;
    }
    this._QRSduration = QRSduration;
  }

  //--------------------------------------------------

  public get Pwave() {
    return this._Pwave;
  }

  public set Pwave(Pwave: number | null) {
    if (Pwave == null) {
      return;
    }
    this._Pwave = Pwave;
  }

  //--------------------------------------------------

  public get QTc() {
    return this._QTc;
  }

  public set QTc(QTc: number | null) {
    if (QTc == null) {
      return;
    }
    this._QTc = QTc;
  }

  //METHODS
  createMedicalRecord(patient: Patient): Specialty {
    throw new Error("Method not implemented.");
  }
  modifyMedicalRecord(cardiologist: Cardiologist): void {
    this.QRSduration = cardiologist.QRSduration;
    this.QTc = cardiologist.QTc;
    this.Pwave = cardiologist.Pwave;
    this.Id = cardiologist.Id;
    this.CreationDate = cardiologist.CreationDate;
    this.Weight = cardiologist.Weight;
    this.Height = cardiologist.Height;
    this.PersonalHistory = cardiologist.PersonalHistory;
    this.HeartRate = cardiologist.HeartRate;
    this.BloodPressure = cardiologist.BloodPressure;
    this.Saturation = cardiologist.Saturation;
  }
}
